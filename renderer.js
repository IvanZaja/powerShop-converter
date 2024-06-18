document.getElementById('select-file-button').addEventListener('click', async () => {
    const fileContent = await window.electron.selectFile();
    if (fileContent) {
      const outputDiv = document.getElementById('file-content');
      outputDiv.innerHTML = '<h2>File Content:</h2>';
      fileContent.forEach((row, index) => {
        outputDiv.innerHTML += `<p>Row ${index + 1}: ${JSON.stringify(row)}</p>`;
      });
    }
  });
  