const form = document.getElementById('textForm');
        const textInput = document.getElementById('textInput');
        const colorPicker = document.getElementById('colorPicker');
        const sizeSlider = document.getElementById('sizeSlider');
        const sizeValue = document.getElementById('sizeValue');
        const boldCheckbox = document.getElementById('boldCheckbox');
        const italicCheckbox = document.getElementById('italicCheckbox');
        const output = document.getElementById('output');
        
        sizeSlider.addEventListener('input', function() {
            sizeValue.textContent = this.value + 'px';
        });
        
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const text = textInput.value;
            if (!text) return;
            
            const styledText = document.createElement('div');
            styledText.textContent = text;
            styledText.style.color = colorPicker.value;
            styledText.style.fontSize = sizeSlider.value + 'px';
            styledText.style.fontWeight = boldCheckbox.checked ? 'bold' : 'normal';
            styledText.style.fontStyle = italicCheckbox.checked ? 'italic' : 'normal';
            
            output.appendChild(styledText);
            textInput.value = '';
        });