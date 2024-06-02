const products = [
    {
      "model": "Toyota 4Runner",
      "type": "SUV",
      "base_msrp": "$36,000",
      "est_mpg": "16/19",
      "image_url": "https://www.toyota.com/imgix/content/dam/toyota/jellies/relative/2024/4runner/base.png?bg=fff&fm=webp&q=90&w=345"
    },
    {
      "model": "Toyota bZ4X",
      "type": "Electric",
      "base_msrp": "$42,000",
      "est_range": "252 miles",
      "image_url": "https://www.toyota.com/imgix/content/dam/toyota/jellies/relative/2024/bz4x/base.png?bg=fff&fm=webp&q=90&w=345"
    },
    {
      "model": "Toyota Corolla Cross",
      "type": "SUV",
      "base_msrp": "$24,000",
      "est_mpg": "31/33",
      "image_url": "https://www.toyota.com/imgix/content/dam/toyota/jellies/relative/2024/corollacross/base.png?bg=fff&fm=webp&q=90&w=345"
    },
    {
      "model": "Toyota Prius",
      "type": "Hybrid",
      "base_msrp": "$25,000",
      "est_mpg": "58/53",
      "image_url": "https://www.toyota.com/imgix/content/dam/toyota/jellies/relative/2024/prius/base.png?bg=fff&fm=webp&q=90&w=345"
    },
    {
      "model": "Toyota Camry",
      "type": "Sedan",
      "base_msrp": "$25,000",
      "est_mpg": "29/41",
      "image_url": "https://www.toyota.com/imgix/content/dam/toyota/jellies/relative/2025/camry/base.png?bg=fff&fm=webp&q=90&w=345"
    },
    {
      "model": "Toyota Corolla",
      "type": "Sedan",
      "base_msrp": "$20,000",
      "est_mpg": "30/38",
      "image_url": "https://www.toyota.com/imgix/content/dam/toyota/jellies/relative/2024/corolla/base.png?bg=fff&fm=webp&q=90&w=345"
    },
    {
      "model": "Toyota Highlander",
      "type": "SUV",
      "base_msrp": "$35,000",
      "est_mpg": "21/29",
      "image_url": "https://www.toyota.com/imgix/content/dam/toyota/jellies/relative/2024/highlander/base.png?bg=fff&fm=webp&q=90&w=345"
    },
    {
      "model": "Toyota RAV4",
      "type": "SUV",
      "base_msrp": "$26,000",
      "est_mpg": "28/35",
      "image_url": "https://www.toyota.com/imgix/content/dam/toyota/jellies/relative/2024/rav4/base.png?bg=fff&fm=webp&q=90&w=345"
    },
    {
      "model": "Toyota Sienna",
      "type": "Minivan",
      "base_msrp": "$34,000",
      "est_mpg": "36/36",
      "image_url": "https://www.toyota.com/imgix/content/dam/toyota/jellies/relative/2024/sienna/base.png?bg=fff&fm=webp&q=90&w=345"
    },
    {
      "model": "Toyota Tacoma",
      "type": "Truck",
      "base_msrp": "$26,000",
      "est_mpg": "20/23",
      "image_url": "https://www.toyota.com/imgix/content/dam/toyota/jellies/relative/2024/tacoma/base.png?bg=fff&fm=webp&q=90&w=345"
    },
    {
      "model": "Toyota Tundra",
      "type": "Truck",
      "base_msrp": "$34,000",
      "est_mpg": "13/17",
      "image_url": "https://www.toyota.com/imgix/content/dam/toyota/jellies/relative/2024/tundra/base.png?bg=fff&fm=webp&q=90&w=345"
    },
    {
      "model": "Toyota Venza",
      "type": "SUV",
      "base_msrp": "$32,000",
      "est_mpg": "40/37",
      "image_url": "https://www.toyota.com/imgix/content/dam/toyota/jellies/relative/2024/venza/base.png?bg=fff&fm=webp&q=90&w=345"
    },
    {
      "model": "Toyota Sequoia",
      "type": "SUV",
      "base_msrp": "$50,000",
      "est_mpg": "13/17",
      "image_url": "https://www.toyota.com/imgix/content/dam/toyota/jellies/relative/2024/sequoia/base.png?bg=fff&fm=webp&q=90&w=345"
    },
    {
      "model": "Toyota Land Cruiser",
      "type": "SUV",
      "base_msrp": "$85,000",
      "est_mpg": "13/17",
      "image_url": "https://www.toyota.com/imgix/content/dam/toyota/jellies/relative/2024/landcruiser/base.png?bg=fff&fm=webp&q=90&w=345"
    },
    {
      "model": "Toyota Mirai",
      "type": "Fuel Cell",
      "base_msrp": "$50,000",
      "est_mpge": "67/64",
      "image_url": "https://www.toyota.com/imgix/content/dam/toyota/jellies/relative/2024/mirai/base.png?bg=fff&fm=webp&q=90&w=345"
    },
    {
      "model": "Toyota GR86",
      "type": "Sports Car",
      "base_msrp": "$28,000",
      "est_mpg": "21/28",
      "image_url": "https://www.toyota.com/imgix/content/dam/toyota/jellies/relative/2024/gr86/base.png?bg=fff&fm=webp&q=90&w=345"
    },
    {
      "model": "Toyota GR Corolla",
      "type": "Sports Car",
      "base_msrp": "$36,000",
      "est_mpg": "21/28",
      "image_url": "https://www.toyota.com/imgix/content/dam/toyota/jellies/relative/2024/grcorolla/base.png?bg=fff&fm=webp&q=90&w=345"
    },
    {
      "model": "Toyota GR Supra",
      "type": "Sports Car",
      "base_msrp": "$43,540",
      "est_mpg": "22/30",
      "image_url": "https://www.toyota.com/imgix/content/dam/toyota/jellies/relative/2024/grsupra/base.png?bg=fff&fm=webp&q=90&w=345"
    }];
  
  
    const productsWrapper = document.getElementById('products-wrapper');
    const checkboxes = document.querySelectorAll('.check');
    const filtersContainer = document.getElementById('filters-container');
    const searchInput = document.getElementById('search');
  
    function addProductToDOM(product) {
      const productElement = document.createElement('div');
      productElement.className = 'item space-y-2';
      productElement.innerHTML = `
        <div class="max-w-xs mx-auto bg-gray-800 shadow-lg rounded-lg overflow-hidden h-full flex flex-col">
          <img class="w-full h-48 object-cover object-center" src="${product.image_url}" alt="${product.model}">
          <div class="flex-grow flex flex-col justify-between">
            <div class="px-4 py-2">
              <h2 class="text-gray-100 text-lg font-semibold">${product.model}</h2>
              <a href="/playauto/vehiculo" style="color:  rgb(6 182 212);">Ver detalles </a>
            </div>
            <div class="mt-auto px-5 pb-2">
              <p class="text-gray-400">${product.base_msrp}</p>
            </div>
          </div>
        </div>
      `;
      productsWrapper.appendChild(productElement);
    }
  
    products.forEach(addProductToDOM);
  
    function filterProducts() {
      const searchTerm = searchInput.value.toLowerCase();
      const checkedCategories = Array.from(checkboxes)
        .filter(check => check.checked)
        .map(check => check.id);
  
      productsWrapper.innerHTML = '';
  
      products.forEach(product => {
        const searchMatch = product.model.toLowerCase().includes(searchTerm);
        const categoryMatch = checkedCategories.length === 0 || checkedCategories.includes(product.type);
  
        if (searchMatch && categoryMatch) {
          addProductToDOM(product);
        }
      });
    }
  
    filtersContainer.addEventListener('change', filterProducts);
    searchInput.addEventListener('input', filterProducts);