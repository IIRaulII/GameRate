import { useState, useCallback, useRef } from 'react';

const useForm = (initialState = {}, validationRules = {}) => {
  const [formValues, setFormValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const touched = useRef({});

  const resetForm = useCallback(() => {
    setFormValues(initialState);
    setErrors({});
    setIsSubmitting(false);
    touched.current = {};
  }, [initialState]);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    
    // Marcar campo como tocado
    touched.current[name] = true;
    
    setFormValues(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Validar al cambiar
    if (validationRules[name]) {
      const fieldError = validateField(name, value);
      setErrors(prev => ({
        ...prev,
        [name]: fieldError
      }));
    }
  }, [validationRules]);

  const validateField = useCallback((fieldName, value) => {
    if (!validationRules[fieldName]) return '';
    
    const rules = validationRules[fieldName];
    
    if (rules.required && (!value || value.trim() === '')) {
      return 'Este campo es obligatorio';
    }
    
    if (rules.isUrl && value) {
      const urlPattern = /^(https?:\/\/)?([\w.-]+)\.([a-z]{2,})(\/\S*)?$/i;
      if (!urlPattern.test(value)) {
        return 'Ingresa una URL válida';
      }
    }
    
    if (rules.isImageUrl && value) {
      const imageUrlPattern = /\.(jpg|jpeg|png|gif|bmp|webp)(\?.*)?$/i;
      if (!imageUrlPattern.test(value)) {
        return 'La URL debe ser de una imagen (jpg, png, gif, etc.)';
      }
    }
    
    if (rules.min && value < rules.min) {
      return `El valor mínimo es ${rules.min}`;
    }
    
    if (rules.max && value > rules.max) {
      return `El valor máximo es ${rules.max}`;
    }
    
    if (rules.pattern && value) {
      if (!new RegExp(rules.pattern).test(value)) {
        return rules.patternMessage || 'Formato inválido';
      }
    }
    
    return '';
  }, [validationRules]);

  const validateForm = useCallback(() => {
    const newErrors = {};
    let isValid = true;
    
    Object.keys(validationRules).forEach(field => {
      const value = formValues[field];
      const error = validateField(field, value);
      
      if (error) {
        newErrors[field] = error;
        isValid = false;
      }
    });
    
    setErrors(newErrors);
    return isValid;
  }, [formValues, validateField, validationRules]);

  const handleSubmit = useCallback((onSubmit) => {
    return (e) => {
      e.preventDefault();
      
      // Marcar todos los campos como tocados
      const allTouched = Object.keys(validationRules).reduce((acc, field) => {
        acc[field] = true;
        return acc;
      }, {});
      
      touched.current = allTouched;
      
      setIsSubmitting(true);
      const isValid = validateForm();
      
      if (isValid) {
        onSubmit(formValues);
      }
      
      setIsSubmitting(false);
    };
  }, [formValues, validateForm, validationRules]);

  return {
    formValues,
    errors,
    isSubmitting,
    touched: touched.current,
    handleChange,
    handleSubmit,
    resetForm,
    setFormValues
  };
};

export default useForm; 