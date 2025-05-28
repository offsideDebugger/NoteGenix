console.log('DCN Script started loading');

// Wait for both DOM and dark mode to be ready
window.addEventListener('load', function() {
    console.log('Window loaded');
    
    // Sample notes data - Replace with your actual data
    const notes = [
        { title: "Lec 1", id: "13X69osEPe-DASTuMB8DpgPE_lqfP2MRt", type: "slides" },
        { title: "Lec 2", id: "13UqkeFXFMSfqPCBO1xi3gBggV5j329o_", type: "slides" },
        { title: "Lec 3", id: "138OFBBpiNFF6NqUJcLuiZFY91ynefHe7", type: "slides" },
        { title: "Lec 4", id: "13LKCJT7wkmjElkTxiBIVHUm6TKrPGJ3K", type: "slides" },
        { title: "Lec 5", id: "13jxB7SJnA2mLkpeB1zjrpJ77kfRaZgrR", type: "slides" },
        { title: "Lec 6", id: "13iyOOGD0ZXWNal7gdC_8aEY53c8GAhPV", type: "slides" },
        { title: "Lec 7", id: "13cBu7zAvK_cUw_olmIZ6j42epYSqYl8l", type: "slides" },
        { title: "Lec 8", id: "14N7_E9v3iOAbFgsUq3S0w4YtpD1EDIDp", type: "slides" },
        { title: "Lec 9", id: "1tIKTn0Rqh50qcH5KV4g8MukZIJnnYsgO", type: "slides" },
        { title: "Lec 10", id: "1JbjaCb_I0UWo3a__SIYdgmZBTUUxW-lH", type: "slides" },
        { title: "Lec 11", id: "1oPZEUqDNhitqk-UR2JmyaGOP64QxsoXY", type: "slides" },
        { title: "Resgisters", id: "13ZaURQNXw1l108IiofhNQTp14o9w9XJx", type: "slides" },
        { title: "Assignment 1", id: "1FzMmb_lS0KGViRFEYCTn2PMorgHdoKF8", type: "pdf" },
        { title: "Assignment 1 Sols", id: "1G1Z8US21SaVXI8M_ZQtjw2D1Seb2Sglb", type: "pdf" },
        { title: "Assignment 2", id: "1G4WQksKIh8Z6ZhMLfCrvDOpWnWgbV0hc", type: "pdf" },
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