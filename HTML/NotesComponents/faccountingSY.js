console.log('Script started loading');

// Wait for both DOM and dark mode to be ready
window.addEventListener('load', function() {
    console.log('Window loaded');
    
    // Sample notes data - Replace with your actual data
    const notes = [
            { title: "Introduction to Financial Accounting", id: "15ZrT2We56Qqx54GGUdTFTe2O2LCpUrq-" },
            { title: "Jounral and Subsidiary Book", id: "1G1RY2oOc61X16WVszccXUpHhCMRBBWbT" },
            { title: "Jounral Entry with GST", id: "1GF-W8hROsIMvb5G7I6RIilpykskw4LjD" },
            { title: "Financial Statemet Analysis", id: "1GCi75FxnIOj01wPaSqRF5dT4KzA6_iSI" },
            { title: "Unit 2 Final Account", id: "1GEstR9-qTvKGeeKDzaQ_JjdfrdLdNMIU" },
            { title: "Question bank", id: "1GAT0kioS16fZeu-6TCcIJtNtIbqD472S" },
            { title: "HandWritten Notes", id: "1GF8VJURMthN4rWHXZzOpxD4CvfHTswpT" },
            { id: "1mCIMgAQxEhrj_mqhiXm2TTRIZJIORSWw",title: "Preparation of Cost Sheet"},
            { id: "1GBhoxvh6uKo8geA7F_6KlAobn9ngefqm",title: "Cost Accounting Theory"},
          
      ];
      

    console.log('Notes array created:', notes);

    const tableBody = document.getElementById('notesTableBody');
    console.log('Table body element:', tableBody);

    // Function to get Google Drive URL
    function getDriveUrl(fileId) {
        return `https://drive.google.com/file/d/${fileId}/preview`;
    }

    // Function to render notes in the table
    function renderNotes() {
        console.log('Rendering notes...');
        if (!tableBody) {
            console.error('Table body element not found!');
            return;
        }

        tableBody.innerHTML = '';
        notes.forEach(note => {
            const driveUrl = getDriveUrl(note.id);
            console.log('Creating row for:', note.title, 'with URL:', driveUrl);
            
            const row = document.createElement('tr');
            row.style.cursor = 'pointer';
            
            // Create button element
            const button = document.createElement('button');
            button.className = 'view-btn';
            button.textContent = 'View PDF';
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
