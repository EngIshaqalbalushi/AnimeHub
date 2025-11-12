import React from 'react';
import './Input.scss';

interface InputProps {
  type?: 'text' | 'email' | 'password' | 'search' | 'number' | 'tel' | 'url';
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  className?: string;
  disabled?: boolean;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'outline' | 'filled' | 'flush';
  status?: 'default' | 'error' | 'success' | 'warning';
  loading?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  id?: string;
  name?: string;
  required?: boolean;
}

const Input: React.FC<InputProps> = ({
  type = 'text',
  placeholder,
  value,
  onChange,
  className = '',
  disabled = false,
  size = 'md',
  variant = 'default',
  status = 'default',
  loading = false,
  iconLeft,
  iconRight,
  id,
  name,
  required = false
}) => {
  const baseClass = 'input';
  const sizeClass = size !== 'md' ? `input--${size}` : '';
  const variantClass = variant !== 'default' ? `input--${variant}` : '';
  const statusClass = status !== 'default' ? `input--${status}` : '';
  const loadingClass = loading ? 'input--loading' : '';
  const iconLeftClass = iconLeft ? 'input--with-icon' : '';
  const iconRightClass = iconRight ? 'input--with-icon-right' : '';

  const inputClasses = [
    baseClass,
    sizeClass,
    variantClass,
    statusClass,
    loadingClass,
    iconLeftClass,
    iconRightClass,
    className
  ].filter(Boolean).join(' ');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  if (iconLeft || iconRight) {
    return (
      <div className="input-wrapper">
        <input
          type={type}
          id={id}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          className={inputClasses}
          disabled={disabled}
          required={required}
        />
        {iconLeft && (
          <span className="input-icon input-icon--left">
            {iconLeft}
          </span>
        )}
        {iconRight && (
          <span className="input-icon input-icon--right">
            {iconRight}
          </span>
        )}
      </div>
    );
  }

  return (
    <input
      type={type}
      id={id}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      className={inputClasses}
      disabled={disabled}
      required={required}
    />
  );
};

export default Input;