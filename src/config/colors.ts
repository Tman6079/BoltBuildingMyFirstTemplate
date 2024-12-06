export const colors = {
  primary: {
    DEFAULT: '#DC2626', // red-600
    light: '#EF4444',   // red-500
    dark: '#B91C1C',    // red-700
  },
  secondary: {
    DEFAULT: '#1E1B4B', // navy blue
    light: '#2E2A6F',
    dark: '#15123A',
  },
  neutral: {
    white: '#FFFFFF',
    black: '#000000',
    gray: {
      50: '#F9FAFB',
      100: '#F3F4F6',
      200: '#E5E7EB',
      300: '#D1D5DB',
      400: '#9CA3AF',
      500: '#6B7280',
      600: '#4B5563',
      700: '#374151',
      800: '#1F2937',
      900: '#111827',
    }
  },
  accent: {
    yellow: '#FCD34D', // yellow-400
    blue: '#3B82F6',   // blue-500
    green: '#10B981',  // emerald-500
  },
  status: {
    success: '#22C55E', // green-500
    error: '#EF4444',   // red-500
    warning: '#F59E0B', // amber-500
    info: '#3B82F6',    // blue-500
  }
};

// Tailwind color class mappings
export const colorClasses = {
  primary: {
    bg: 'bg-red-600',
    bgHover: 'hover:bg-red-700',
    text: 'text-red-600',
    textHover: 'hover:text-red-700',
    border: 'border-red-600',
    borderHover: 'hover:border-red-700',
  },
  secondary: {
    bg: 'bg-[#1E1B4B]',
    bgHover: 'hover:bg-[#15123A]',
    text: 'text-[#1E1B4B]',
    textHover: 'hover:text-[#15123A]',
    border: 'border-[#1E1B4B]',
    borderHover: 'hover:border-[#15123A]',
  }
};