window.addEventListener('load', function() {
    console.log('Window loaded');
    
    // Sample notes data - Replace with your actual data
const notes = [
  { id: "1q9CHAYtgwUZTdMn6peyuAEIi2Xb7zjgg", title: "NWhat is Algorithm ?", type: "pdf" },
  { id: "13RPEdLDLVd9y7KP7pzWQfwj0708ie4Vl", title: "Tree", type: "slides" },
  { id: "1ZyIFnssUvbpRWGeL2MLkPp_lrWoat-U0", title: "STL in CPP", type: "slides" },
  { id: "1NMFv17T4MfbGphtiMJm_4-klncXuXsz4", title: "Steps to find Time Complexity", type: "pdf" },
  { id: "1WdlRSpod1JDU5dTfnDr8Uj2sDAEH1JeX", title: "Stack and its Application", type: "slides" },
  { id: "1kavWkPdynQkTWUmX97KwYonrkDboq_DH", title: "Sorting and searching", type: "slides" },
  { id: "1aRlWX598vdFVFuYQAlzEs9Ok6D6IBsPz", title: "Singly linked list code", type: "pdf" },
  { id: "1cwZTRc1zZwq42fx6GeoEvARSHhMF6YHz", title: "Queue Data Structure", type: "slides" },
  { id: "1K-P3YnHhTJcVEcpgEpJKZ7cEAUVA8hcU", title: "Linked List", type: "slides" },
  { id: "1lan8BIWRi4sJOol-lRqr9YuXpb4oRcGK", title: "Heap DS", type: "slides" },
  { id: "1GvSirMJ-s-d1PAu8nE3snn1SWj_pdMr0", title: "Graph", type: "slides" },
  { id: "1QGBt9YSPWLn-N8cpo3tEqXXZztvuUwq9", title: "E. Bala the G, DSA Textbook", type: "pdf" },
  { id: "1b0vFsdh-eGPAKKwsCzOZF2suV85XBH8H", title: "DS Array", type: "slides" },
  { id: "1IXCTmym2Kfx52WQmt7EaWLdj73h4TOum", title: "Doubly Linked List", type: "pdf" },
  { id: "1vHrBWkK2iq5mOQUIaD637nLJXPuqYChA", title: "Circular Linked list Code", type: "pdf" },
  { id: "1atkU5pTM8t2b4w2TVN2TEpNO2tnGfo_8", title: "Asymptotic Notations", type: "slides" },
  { id: "1z9tenKXBS54e5bGTg0o1lAAWYJc6EHpJ", title: "Algorithm", type: "slides" },
  { id: "1GnTJZ-0Y9j-09VZYfRKGRR7yEGyCVd2x", title: "ADT", type: "slides" },
  { id: "1ayPYSKBqOlG0qD6FXb8qlwcojjGkh_ac", title: "Reema Thareja Textbook", type: "pdf" },
   { id: "160GpnPl32RVHaYhipOfdZCeQsVEu9CZQ", title: "Time Complexity of Linked List", type: "doc" }
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
