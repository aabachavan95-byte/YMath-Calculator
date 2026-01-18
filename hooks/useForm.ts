import { useState, useCallback } from 'react';
import type { TopicInput } from '../types';

const validateField = (inputConfig: TopicInput, value: string): string | null => {
  if (!value && inputConfig.type !== 'textarea') {
    return `${inputConfig.label} आवश्यक आहे.`;
  }
  
  if (inputConfig.type === 'number' && value) {
    // Check for invalid characters. Allows numbers, one decimal, one leading hyphen.
    if (!/^-?\d*\.?\d*$/.test(value)) {
      return `'${inputConfig.label}' साठी एक वैध संख्या प्रविष्ट करा. उदाहरणार्थ: 123 or 12.3`;
    }
    
    // `parseFloat` will handle values like "12." correctly (as 12).
    const numericValue = parseFloat(value);
    
    // `isNaN` check for values that are just "." or "-".
    if (isNaN(numericValue) && value.trim() !== '-' && value.trim() !== '.') {
        return `'${inputConfig.label}' साठी एक वैध संख्या प्रविष्ट करा.`;
    }
    
    if (inputConfig.validation) {
      const { min, max, isInteger, errorMessage } = inputConfig.validation;

      // Don't validate if the number is incomplete (just a sign)
      if (isNaN(numericValue)) return null;

      if (min !== undefined && numericValue < min) {
        return errorMessage || `${inputConfig.label} ${min} पेक्षा कमी असू शकत नाही.`;
      }
      if (max !== undefined && numericValue > max) {
        return errorMessage || `${inputConfig.label} ${max} पेक्षा जास्त असू शकत नाही.`;
      }
      if (isInteger && !Number.isInteger(numericValue)) {
        return errorMessage || `${inputConfig.label} पूर्णांक असणे आवश्यक आहे (उदा. 10, 25), दशांश नाही (उदा. 10.5).`;
      }
    }
  }

  return null;
};

interface UseFormProps {
    initialValues: Record<string, string>;
    topicInputs: TopicInput[];
}

export const useForm = ({ initialValues, topicInputs }: UseFormProps) => {
    const [inputs, setInputs] = useState<Record<string, string>>(initialValues);
    const [errors, setErrors] = useState<Record<string, string>>({});

    const handleInputChange = useCallback((key: string, value: string) => {
        setInputs(prev => ({ ...prev, [key]: value }));
        
        const inputConfig = topicInputs.find(i => i.key === key);
        if(inputConfig) {
            const error = validateField(inputConfig, value);
            setErrors(prev => ({ ...prev, [key]: error || '' }));
        }
    }, [topicInputs]);

    const validateForm = useCallback((): boolean => {
        const currentErrors: Record<string, string> = {};
        let formIsValid = true;
        
        for (const input of topicInputs) {
            const value = inputs[input.key] || '';
            
            // Add stricter validation for submit time
            if (input.type === 'number') {
                const trimmedValue = value.trim();
                if (trimmedValue.endsWith('.') || trimmedValue === '-') {
                    currentErrors[input.key] = `'${input.label}' साठी कृपया एक पूर्ण संख्या प्रविष्ट करा.`;
                    formIsValid = false;
                    continue; // Skip to next input
                }
            }

            const error = validateField(input, value);
            if (error) {
                currentErrors[input.key] = error;
                formIsValid = false;
            }
        }

        setErrors(currentErrors);
        return formIsValid;
    }, [inputs, topicInputs]);

    const resetForm = useCallback(() => {
        setInputs(initialValues);
        setErrors({});
    }, [initialValues]);

    return {
        inputs,
        errors,
        handleInputChange,
        validateForm,
        resetForm,
    };
};