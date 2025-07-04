

// Wait for both DOM and dark mode to be ready
window.addEventListener('load', function() {
    console.log('Window loaded');
    
    // Sample notes data - Replace with your actual data
   const notes = [
  { title: "Lecture 1", id: "191Vsoe-Tcjg5A19CATgtNjvVE2xzMIMr", type: "slides" },
  { title: "Lecture 2", id: "19C3aOSBMO9Cy3uL80Z5wZc9Z1t-uyETz", type: "slides" },
  { title: "Lecture 3", id: "1Va-cvueAxheoVxY4eQbaAfFwcR8nprWx", type: "slides" },
  { title: "Lecture 4", id: "1VXpyYudNbIa-mhpDhSXUQ0RJfWA7UTny", type: "slides" },
  { title: "Lecture 5", id: "1VmS_CH5VCA85ZcpQggjsMLSjU6YzH5EK", type: "slides" },
  { title: "Lecture 6", id: "1VhbHZw2OmfBWGrQwcu4DGQz21AVbsJFJ", type: "slides" },
  { title: "Lecture 7", id: "1fuFz2bKDT4eQiB1N6Cm2o_CO47m22WfE", type: "slides" },
  { title: "Lecture 8", id: "1n0r3WM8KC2x-BjomyxrFynA0ZsFYGrUP", type: "slides" },
  { title: "Lecture 9", id: "18pyGi7zEp6N063TQX6_khcsnRgeU_uhy", type: "slides" },
  { title: "Lecture 10", id: "18qoTw9DP5nihVbp0UHfpan2RhjKbqqg2", type: "slides" },
  { title: "Lecture 11", id: "18tOHWkx1V9HdtrYND58CK3wxhQBQ13Xw", type: "slides" },
  { title: "Lecture 12", id: "1GNCyxWFKgXZcOp6nEB0GJySi78Dkmgrj", type: "slides" },
  { title: "Lecture 13", id: "1GIv2figuqkmS-P7za2IwanQFKi_bT7AM", type: "slides" },
  { title: "HTML-Chapter_wise", id: "18oXeWBOnZv0v6IClUg2Ib5qX2wtTrapo", type: "pdf" },
  { title: "CSS-Chapter_wise", id: "18o_vPjW82zBScScPv2Nu2fLE2BxhJkhk", type: "pdf" },
  { title: "JS-Chapter_wise", id: "18t6knSI6JnOkiki8sqqU1Q7QQizl72re", type: "pdf" }
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
      
