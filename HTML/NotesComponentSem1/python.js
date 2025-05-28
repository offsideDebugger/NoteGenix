console.log('DCN Script started loading');

// Wait for both DOM and dark mode to be ready
window.addEventListener('load', function() {
    console.log('Window loaded');
    
    // Sample notes data - Replace with your actual data
 // Reference Files
const notes=[
    { title: "Part 1", id: "1DWS1EwTUvM_PnwflC1ocuHzxM-vtJ18X", type: "pdf" },
    { title: "Part 2", id: "1DP-xd4Xbee7JsKOhLYrk4HqQED8shawv", type: "pdf" },
    { title: "Part 3", id: "1D1diBdASc3Xx8nIfRB7ZBlLrI_VJCHas", type: "pdf" },
    { title: "Part 4", id: "1CdCG_NiwCRM6sd8Qn243FBkD35oVpKdX", type: "pdf" },
    { title: "Part 5", id: "1Cvc-JGQ1HcgYhTSwuQbNlOkSStxQ530I", type: "pdf" },
    { title: "Python basics 1", id: "1CoRkmIKAYUxvuSSJpukIJXKbUsosspxI", type: "pdf" },
    { title: "Python basics 2", id: "1DF96Vc29fJUncvGGJLQT0vJMliI0zORP", type: "pdf" },
    { title: "Python PPT", id: "1D3aVCPyzsllH1ckUnBsuDBGr7US6IjfX", type: "pdf" },
    { title: "Python Problem Solving", id: "1Dvg2XrhfiCwB2GMLpK6oKB1y6QRA0DIp", type: "pdf" },
    { title: "Exception Handling", id: "1DuW0CprUgupaEawpWNwx4PUJas8VYgX1", type: "pdf" },
    { title: "File Handling", id: "1DqchkONCciF2hHErenVcea__421e15Rd", type: "pdf" },
    { title: "Function", id: "1DejRJvNF10kcUSnbsOJ-vK0jkCSVm3w0", type: "pdf" },
    { title: "Module", id: "1DaKG9CSo05wHB8IrBx1VsVf53y5SmT01", type: "pdf" },
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