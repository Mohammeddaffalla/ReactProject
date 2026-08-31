
// تعريف المكون واستقبال الـ Props
function Button({ text, onClick, variant = 'primary', disabled = false }) {
  // تحديد اسم الكلاس بناءً على الـ variant الممرر
  const buttonStyle = `btn btn-${variant}`;

  return (
    <button 
      className={buttonStyle} 
      onClick={onClick} 
      disabled={disabled}
    >
      {text}
    </button>
  );
}

export default Button;