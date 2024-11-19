const mobiles = {
    iphone: {
      iphone7: { processor: "Snapdragon 8 Gen 2", memory: { ram: 12, storage: 512 } },
      iphone8: { processor: "Snapdragon 12 Gen 5", memory: { ram: 8, storage: 256 } },
      iphoneX: { processor: "Snapdragon 5 Gen 4", memory: { ram: 8, storage: 256 } },
    },
    xiomi: {
      redmiA2: { processor: "Snapdragon 8 Gen 1", memory: { ram: 8, storage: 256 } },
      redmi10: { processor: "Snapdragon 7 Gen 5", memory: { ram: 12, storage: 256 } },
      redmi12: { processor: "Snapdragon 12 Gen 1", memory: { ram: 12, storage: 512 } },
    },
    samsung: {
      samsung_Galaxy_S24: { processor: "Snapdragon 8 Gen 2", memory: { ram: 12, storage: 512 } },
      samsung_Galaxy_S51: { processor: "Snapdragon 9 Gen 4", memory: { ram: 8, storage: 128 } },
    },
  };
  
  // Populate brand dropdown
  const brandSelect = document.getElementById("brand");
  const modelSelect = document.getElementById("model");
  const searchBtn = document.getElementById("searchBtn");
  const resultDiv = document.getElementById("result");
  const mobileDetails = document.getElementById("mobileDetails");
  
  Object.keys(mobiles).forEach((brand) => {
    const option = document.createElement("option");
    option.value = brand;
    option.textContent = brand;
    brandSelect.appendChild(option);
  });
  
  // Handle brand selection
  brandSelect.addEventListener("change", () => {
    const selectedBrand = brandSelect.value;
    modelSelect.innerHTML = '<option value="">Select a model</option>'; // Reset model dropdown
    modelSelect.disabled = true;
    searchBtn.disabled = true;
  
    if (selectedBrand && mobiles[selectedBrand]) {
      Object.keys(mobiles[selectedBrand]).forEach((model) => {
        const option = document.createElement("option");
        option.value = model;
        option.textContent = model;
        modelSelect.appendChild(option);
      });
      modelSelect.disabled = false;
    }
  });
  
  // Handle model selection
  modelSelect.addEventListener("change", () => {
    searchBtn.disabled = modelSelect.value === "";
  });
  
  // Handle search button click
  searchBtn.addEventListener("click", () => {
    const selectedBrand = brandSelect.value;
    const selectedModel = modelSelect.value;
  
    if (selectedBrand && selectedModel) {
      const mobile = mobiles[selectedBrand][selectedModel];
      mobileDetails.innerHTML = `
        <strong>Brand:</strong> ${selectedBrand}<br>
        <strong>Model:</strong> ${selectedModel}<br>
        <strong>Processor:</strong> ${mobile.processor}<br>
        <strong>Memory:</strong> RAM: ${mobile.memory.ram}GB, Storage: ${mobile.memory.storage}GB
      `;
      resultDiv.style.display = "block";
    }
  });
  