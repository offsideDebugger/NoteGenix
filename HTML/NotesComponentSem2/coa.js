console.log('DCN Script started loading');

// Wait for both DOM and dark mode to be ready
window.addEventListener('load', function() {
    console.log('Window loaded');
    
    const notes=[
        
        {
          "title": "Unit 1 Logic Microoperations",
          "id": "1mf5Wj0bpVQxOkKTF-5wqeyGwW3kCvSzb",
          "type": "slides"
        },
        {
          "title": "Unit 1 History of Computers",
          "id": "1bvITlVL7DB0IS7K6SH-pot4BzYP_63vR",
          "type": "slides"
        },
        {
          "title": "Unit 1 Arithmetic Logic Shift Unit",
          "id": "1WIrDEF5cDKI3MRFG6bF8umjQ0rwLwl76",
          "type": "slides"
        },
        {
          "title": "Unit 1 Shift MicroOperations",
          "id": "1SokwNzTF6rYJBJOqeNeHJUkyvjppcX4m",
          "type": "slides"
        },
        {
          "title": "Unit 1 NUmber System",
          "id": "1QAk7_-AAHnWtPLkoFM6aFETi06pMt7PT",
          "type": "slides"
        },
        {
          "title": "Unit 1 Booths ALgorithm",
          "id": "1GAGkj1M3mi68SI4GdRnUk6r1AmR_N2R7",
          "type": "slides"
        },
        {
          "title": "Unit 1 Floation Points Ops",
          "id": "1CR4OWEp6KZ_9ZXLL-sIVb0dEkSgaSl2E",
          "type": "slides"
        },
        {
          "title": "Unit 1 Stored Programs",
          "id": "1BNkNv-aHIyfxOPM9WfHtSFdVkztVtqtP",
          "type": "slides"
        },
        {
          "title": "Unit 1 Arithmetic MicroOPerations",
          "id": "1Ah7CvT2a0bNSI-K57uw16BvQ_mVzSu8R",
          "type": "slides"
        },
        {
          "title": "LUnit 1 ogic Gates",
          "id": "18JUxOtYg3hW6hK7Y0y5X3R_A8LcGaE9c",
          "type": "slides"
        },
        {
          "title": "Unit 1 Addition and Substraction using Complements",
          "id": "13OT8_9DfGnCQqB24Rew0e8TA4FC1l26R",
          "type": "slides"
        },
        {
            "title": "Unit 2 Instructions Code",
            "id": "1jOPG2YDrIRqT9hCBi4CBLlfkaZhBu68H",
            "type": "slides"
          },
          {
            "title": "Unit 2 Common Bus System",
            "id": "1aa-MBJYhCjJfh7ZX2PbFxCLJdrmL-kRG",
            "type": "slides"
          },
          {
            "title": "Unit 2 Timing and Control",
            "id": "1Wu0rifzzADWE_SnxFpeaLussKYe0V1UD",
            "type": "slides"
          },
          {
            "title": "Unit 2 Instruction Format",
            "id": "1VgXMYH7IuyZ2rjYtEDx49aBKXLMbRNL1",
            "type": "slides"
          },
          {
            "title": "Unit 2 Instruction Cycle",
            "id": "1Sape-4PHeC-3jwxaYEbYyyBurHsIn4mR",
            "type": "slides"
          },
          {
            "title": "Unit 2 Interrupt Cycle",
            "id": "1SN2-QWBrruKb8Ei0Zc6oYXMPIsyWzbkh",
            "type": "slides"
          },
          {
            "title": "Unit 2 Input-Output Instructions",
            "id": "1Db0Mju1-FSbN6DDs4LUJkbz_IK45ypBF",
            "type": "slides"
          },
          {
            "title": "Unit 2 Computer Registers",
            "id": "13XGqCdnGkheK-C1PhIfd_Z3tNYPEckKF",
            "type": "slides"
          },
          {
            "title": "Unit 3 Arithmetic Pipeline",
            "id": "1gu9Hv-TIlMnzAyIX2ckWLTW3aMkp_p9J",
            "type": "slides"
          },
          {
            "title": "Unit 3 Pipelining",
            "id": "1gYxAZPb2muM4muMgbIj4fi6xywutvk0F",
            "type": "slides"
          },
          {
            "title": "Unit 3 Array and Vector Processing",
            "id": "1bHKdUAEFKkoF6-YZXvoTFKBCYtOZrexC",
            "type": "slides"
          },
          {
            "title": "Unit 3 Flyn's Taxonomy",
            "id": "1VAf2dVD3bhZArG7IT-f1SKHRcavt7Cvs",
            "type": "slides"
          },
          {
            "title": "Unit 3 I/O Organzation",
            "id": "1OklbeENUc0cSH9D9mpV-rhgKPqdsGEF5",
            "type": "slides"
          },
          {
            "title": "Unit 3 Instruction Pipleline",
            "id": "1GUVm5p8o7laeS3Te4OW8O5BIrFT5Eld_",
            "type": "slides"
          }
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