console.log('DCN Script started loading');

// Wait for both DOM and dark mode to be ready
window.addEventListener('load', function() {
    console.log('Window loaded');
    
    const notes = [
        { title: "Lec 1 Introduction to C and C++", id: "1OW1hyuaCYxkDXJal7CvGIqveym3rbGvT", type: "slides" },
        { title: "Lec 2 C Flow Controller", id: "1OFbL4NTz_xsCkgP72Lq2-7BzmjMuTfS1", type: "slides" },
        { title: "Lec 3 Function", id: "10xKi2QcmwV7gyI1LYXz6x8SYVa2fzlUc", type: "slides" },
        { title: "Lec 4 Array", id: "1R12dBRFRrnIscmsIdr-FzXAwHd8ATQuA", type: "slides" },
        { title: "Lec 5 Pounters Structure Unions", id: "1JgEeXtIqUnfnAxXuZl_JnfX12iUmAfRg", type: "slides" },
        { title: "Lec 7 File Handling", id: "1SMMvy_8YMps1y9qcEzK1OVHxGCnitGLu", type: "slides" },
        { title: "Lec 8 Oops Class and Objects", id: "1HX0N7L5Rc2AafVoAYnwloc7if93YdFyA", type: "slides" },
        { title: "Lec 9 OOPs", id: "1ugRGUWY-lRRk-rK26NnGNUfgWSln1A2g", type: "slides" },
        { title: "Assignment 1", id: "1ZNdDFnL-rs2gTlQzagLxYSUyaCAizNhi", type: "pdf" },
        { title: "Assignment 2", id: "1xjy6ChZsCCuuX5MsUDCcbSuPE94kL0GU", type: "pdf" },
        { title: "Assignment 3", id: "1ma_HsS7A0RhvGX9C_1rP62FkV3a8_Hkm", type: "pdf" },
        { title: "Assignment 4", id: "169mXBe6m6Z-fp8vlNdX_TLKz9tWv-CpE", type: "pdf" },
        { title: "Assignment 5", id: "1q97iNKBnyzc5X_RqkCIbDt29zWudxQbs", type: "pdf" },
        { title: "Assignment 6", id: "1BwmHq42BFx2YqI3d8zrsM-7UOuXgSkgb", type: "pdf" },
        { title: "C Reference Book", id: "1arU_bWmCJkGJLthqj3kTd3euO5Nnpn5o", type: "pdf" },
        { title: "C++ OOPs questions", id: "1Te9iIJM8dAvKk-n6vaSAqaRNlQ-AzDvX", type: "pdf" },
        { title: "C MCQs", id: "1_tXcyYNhFoCxZP23N37Cv0tbyiwpXbqI", type: "pdf" },
       
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