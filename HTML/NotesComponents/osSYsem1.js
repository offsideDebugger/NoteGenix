window.addEventListener('load', function() {
    console.log('Window loaded');
    
    // Sample notes data - Replace with your actual data
 const notes = [
  { title: "OS Basics", id: "1DBOvTeGZVfPAuug4X-Ju2b7nGX8lynUj", type: "slides" },
  { title: "Ch-1 OS", id: "1Cq0eyMq1qqOjX5xfIYg0-hgNXt8WrJP1", type: "slides" },
  { title: "Ch-2", id: "1Cy-JLoIOrz_ZhG2fv6rkNp4qoOzkK23s", type: "slides" },
  { title: "Ch-3 Process and IPC", id: "1DEsRoXevfNsyipmo3CXG935huitNl72y", type: "slides" },
  { title: "Process and IPC", id: "1n0d84cidOuSUNznX9CRS2cPbhwJE8D3V", type: "slides" },
  { title: "Ch-4", id: "1-uXCT7HYfiplBoowQoXNNIzfZRheOTD3", type: "slides" },
  { title: "Ch-4 Extra", id: "1H6JodEK7X3lvYBJhtBXQ6j2o4aun0mFC", type: "pdf" },
  { title: "Ch-5", id: "104RLInAWQX6C_Izxk1pkQiIavQmAUSmg", type: "slides" },
  { title: "Ch-6", id: "10065QicupOoatEeWrsWVQDXfWSKhpK5D", type: "slides" },
  { title: "Ch-7 Deadlock", id: "1-zUQNxNDcsvSWiw6JtiKT7MjYcR74Lg3", type: "pdf" },
  { title: "Ch-7 Extra", id: "1-wqD3_kn8KgJP5lcxaLRjev_JPyFYDpX", type: "pdf" },
  { title: "Ch-9 Main Memory", id: "1GUQ5AGPXzfvMExpx8FXZ09uKggI_g-CG", type: "slides" },
  { title: "Ch-10 Virtual Memory", id: "1GRT9QXhXDPnBJ6P4H9n3spEArkDvJIMp", type: "slides" },
  { title: "Threads", id: "1XsyDnfVre9KamjB6nbdXSA7y86hENUFt", type: "slides" },
  { title: "Semaphores", id: "1H3WKfegzj2GmTc79gu3YZ4qPX6i5GnvA", type: "pdf" },
  { title: "Peterson's Algorithm", id: "1Gt9m-wiSVfrBcKVBTLj6dGUXC1pdd_qr", type: "pdf" },
  { title: "Theory Assignments", id: "1Ga5nB0J9f_DEHrsl7z1FPiyTfMEFZgWC", type: "pdf" },
  { title: "CPU Scheduling", id: "1XvrnD8QVpGFXOmCi7ZMT_qb4pvegpG26", type: "slides" },
  { title: "Banker's Algorithm", id: "109zXNUZrN9XlnOhJcMrcyRCDxDMshOTx", type: "pdf" },
  { title: "OS System Concepts 7th Edition", id: "1Ghz8aK5OBUgp_08-_m7NyFBU2NhdZ_85", type: "pdf" },
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
