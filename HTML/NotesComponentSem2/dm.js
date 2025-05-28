

// Wait for both DOM and dark mode to be ready
window.addEventListener('load', function() {
    console.log('Window loaded');
    
    const notes = [
        {
            "title": "Tropical Cyclones",
            "id": "1ybW21fcpkYVgJ-AK67OykhlkhKW5OOeX",
            "type": "pdf"
          },
          {
            "title": "Industrial Disasters",
            "id": "1yTP9IRZMOSDScbtnl_M3ALb-8Ld2fZJG",
            "type": "pdf"
          },
          {
            "title": "Disaster Management",
            "id": "1tkL6A3k4bW-c7yKQf5vBft9iOlgixh9z",
            "type": "slides"
          },
          {
            "title": "Forest Fires",
            "id": "1ruGXf0R20K-FZylzKS5S1BJVxZ8h6mmt",
            "type": "pdf"
          },
          {
            "title": "Risk and Harazd Analysis",
            "id": "1cMqBoVIxx7CbP5FYR3lYeYwQgTLfpa3h",
            "type": "pdf"
          },
          {
            "title": "Disaster Management Cycle",
            "id": "1bryA-QPFWARQWymsKw9oLgTH3Sfq4yjB",
            "type": "slides"
          },
          {
            "title": "EarthQuake , Tsunamis , DMP",
            "id": "1PrRU9I4axRybvNjMA1hGUwFSXiohOWZ8",
            "type": "pdf"
          },
          {
            "title": "Droughts",
            "id": "1NWfsltdPIsM95AyajpuM6fsmAVqZVDVP",
            "type": "pdf"
          },
          {
            "title": "Mass Movement and Mass Wasting",
            "id": "1L6U3L8j7yY7H-23tW9w47D0CEikbR0s8",
            "type": "pdf"
          }
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