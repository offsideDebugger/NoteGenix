console.log('DCN Script started loading');

// Wait for both DOM and dark mode to be ready
window.addEventListener('load', function() {
    console.log('Window loaded');
    
    // Sample notes data - Replace with your actual data
    const notes = [

        { title: "Connecting Devices", id: "1POUuASIWTJaQPlbXlx_Plg3J0SH1ABAY" , type:"pdf"},
        { title: "Connecting Devices", id: "1PMoCcEXT9Pa9WqBS6kOkfkmlVveTjOEd",type:"slides" }, // Google Slides
        { title: "Transmission Media", id: "1PKNwjeVf-o_Df_2U3t9cWQH5h6nomK11" ,type:"slides" }, // Google Slides
        { title: "Data Communication and Networking", id: "1PI72jkxsJWPeALu-cgQgDurFmusMj5GO" , type:"pdf"},
        { title: "DDL Protocol", id: "1PDxw8jrI0HdVbS-gEBKc4yhgMPaZkW-X" ,type:"slides "},  // Google Slides
        { title:"IP Address",id:"1OmEaY2uPLUuu5Usq9PLRn3T8YnYj0Kl3",type:"slides"},
        { title:"LAN WAN MAN CAN", id:"1Om10sGHsNeIrrjq1-rkDt5FVIMMd16XU" , type:"slides"},
         { title:"ipv6", id:"1OntSdviYCDr9ncUIdIkeNTNQSuvIg1Aq" , type:"slides"} ,
       { title:"MAC", id:"1OkZBeUiruDraG2IyJSNIjyL5nFMgrAwS" , type:"slides"},
       { title:"Nework Topology", id:"1OkLvGhxMaWZLCahQIB6D3WIPz6s7rss1" , type:"slides"},
       { title:"Error Detecting", id:"1Ok-9b0wnSquOLpKO75kAlN6OvJB1e5jF" , type:"slides"}
      
      ]
      
      
      
      
      
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