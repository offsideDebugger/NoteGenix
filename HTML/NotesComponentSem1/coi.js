console.log('DCN Script started loading');

// Wait for both DOM and dark mode to be ready
window.addEventListener('load', function() {
    console.log('Window loaded');
    
    // Sample notes data - Replace with your actual data
    const notes=[
        { title: "Nature of Constitution", id: "1NqqBwSq3CDoraf-sKAZSbmqVgMS76KEf", type: "slides" },
        { title: "Panchayat and Societies", id: "1Nlzi0UcFBoq2_mrGp66x1Qd0-qKbzNzK", type: "slides" },
        { title: "Parliament", id: "1NjA7pJ2lZnfk8jLjmZ0kzhc8jyvvaW1k", type: "slides" },
        { title: "President", id: "1NitCRfJtgJ7AIs3Wv4O9AKPNB1Hxsq27", type: "slides" },
        { title: "Preamble", id: "1Ngjfdgqmmx2pP-QacuiXehqN1Tf4CqbJ", type: "slides" },
        { title: "State Exeutie", id: "1NeA-uQNkxiN6Y6QLlUpR40rQ8oF5lwsV", type: "slides" },
        { title: "Article 23-24", id: "1NbjBbFAvYrcVq0KhYtrNdTa2VzHGdhpN", type: "slides" },
        { title: "Salient Features", id: "1NULGBC2Ej0ukRTZ2Z6IH-5vs4YFXwdfG", type: "slides" },
        { title: "State Judiciary", id: "1NRQowvLiyHkvLKe0kQKvFCpSg0RKNIsX", type: "slides" },
        { title: "Article 15", id: "1NOm1dPgHtYGn17NQR_YSCislVhxBqEOD", type: "slides" },
        { title: "Article 19", id: "1NNRTi_v0MgvNouPOvnxAbF8aJcnwu-Ul", type: "slides" },
        { title: "Article 16", id: "1NKX8nlXmqbBGAhX1j-s5EuEnmRpJknsb", type: "slides" },
        { title: "Article 17-18", id: "1NIXk5VpvJP5xakpkAX2WB8KVDrcYUATc", type: "slides" },
        { title: "Article 20", id: "1NFhgPsH-xDnSrwqaUViRBr9Br82io3dP", type: "slides" },
        { title: "Article 21", id: "1NDYbV5fr-LvF2-kFMq7XWOLWF2ULKZzW", type: "slides" },
        { title: "Article 22", id: "1N8d981cCIrQakWadsWwEX0-aaLMyzlrx", type: "slides" },
        { title: "Article 25-28", id: "1My49Jm_mTYfgmUhYbPbcJusG6ix0qu-7", type: "slides" },
        { title: "Article 29-30", id: "1MqAHtr4G7gR7F9aDdK5PkVanTOl0ZdL8", type: "slides" },
        { title: "Council of Minister", id: "1Mp8pIEnFM6VY2eERJBY1YRafKFR-x66A", type: "slides" },
        { title: "Union Judiciary", id: "1MhsbgFMZIjSmVjkc5qFlU-R7Ba9t6PzD", type: "slides" },
        { title: "Historical Background of COI", id: "1Mh1lradk_ZNeyIUamSjrQrIj8-6zaiD8", type: "slides" }
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