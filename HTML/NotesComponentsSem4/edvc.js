console.log('DCN Script started loading');

// Wait for both DOM and dark mode to be ready
window.addEventListener('load', function() {
    console.log('Window loaded');
    
    // Sample notes data - Replace with your actual data
    const notes = [
        { title: "Unit 1 Multimedia and Content Dev", id: "1bnnFm5NalKSTuDKAFzbu18O7_OyUJigI",type:"pdf" },
        { title: "UNit 1 SEO Basics and content optimization", id: "1U7oxX6HDwX0oIe00UXLdi3QnmOZezqK8",type:"pdf" },
        { title: "Unit 1 English for Digital Coms", id: "1U798XDdJdhrMd3olpkJVcgN7mYnCY4ta",type:"pdf" },
        { title: "Unit 1 Principles of effective online writing", id: "1U-_AJjb7SF7-NoaSZqMmddblSfK2R2_M",type:"pdf"  },
        { title: "Unit 2 Best Practices for meeting", id: "1iM69dspkfOnMGu-OS6xiPYrTaBxr3oji",type:"pdf" },
        { title: "UNit 2 Tools and Tech for Virtual Coms", id: "1iHcHXU8Kjh6Qo3zgKo1-vHZFf5USiR9-",type:"pdf" },
      ];
      
      
      
    console.log('Notes array created:', notes);

    const tableBody = document.getElementById('notesTableBody');
    console.log('Table body element:', tableBody);

    // Function to get Google Drive URL based on document type
    function getDriveUrl(fileId, type) {
        if (type === 'doc') {
            return `https://docs.google.com/document/d/${fileId}/preview`;
        } else if (type === 'slides') {
            return `https://docs.google.com/presentation/d/${fileId}/preview`;
        } else {
            return `https://drive.google.com/file/d/${fileId}/preview`;
        }
    }

    // Function to render notes in the table
    function renderNotes() {
        console.log('Rendering notes...');
        if (!tableBody) {
            console.error('Table body element not found!');
            return;
        }

        tableBody.innerHTML = '';
        notes.forEach((note, index) => {
            const driveUrl = getDriveUrl(note.id, note.type);
            console.log('Creating row for:', note.title, 'with URL:', driveUrl);
            
            const row = document.createElement('tr');
            row.style.cursor = 'pointer';

            // Add a class to the first row for styling
            if (index === 0) {
                row.classList.add('first-data-row');
            }
            
            // Create button element
            const button = document.createElement('button');
            button.className = 'view-btn';
            button.textContent = note.type === 'doc' ? 'View Doc' : note.type === 'slides' ? 'View Slides' : 'View PDF';
            button.onclick = (e) => {
                e.stopPropagation();
                console.log('Button clicked, opening URL:', driveUrl);
                window.open(driveUrl, '_blank');
            };
            
            row.innerHTML = `
                <td>${note.title}</td>
                <td></td>
            `;
            
            // Add button to the last cell
            const lastCell = row.querySelector('td:last-child');
            lastCell.appendChild(button);
            
            // Make the entire row clickable
            row.addEventListener('click', () => {
                console.log('Row clicked, opening URL:', driveUrl);
                window.open(driveUrl, '_blank');
            });
            
            tableBody.appendChild(row);
        });
        console.log('Notes rendered');
    }

    // Initial render
    renderNotes();
}); 