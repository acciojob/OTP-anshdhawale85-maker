//your JS code here. If required.
document.addEventListener('DOMContentLoaded', () => {
  const codes = document.querySelectorAll('.code');

  if (codes.length > 0) {
    codes[0].focus();
  }

  codes.forEach((code, index) => {
    code.addEventListener('input', (e) => {
      const value = e.target.value;

      if (!/^[0-9]$/.test(value)) {
        e.target.value = '';
        return;
      }

      if (value.length === 1 && index < codes.length - 1) {
        codes[index + 1].focus();
      }
    });

     code.addEventListener('keydown', (e) => {
      if (e.key === 'Backspace') {
        if (code.value !== '') {
          code.value = '';
        } else if (index > 0) {
          
          codes[index - 1].value = '';
          codes[index - 1].focus();
        }
        e.preventDefault(); 
      }
    });
  });
});