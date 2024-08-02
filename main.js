// Function to load the body content of each page dynamically
function loadPageContent(pageName) {
    fetchFile(pageName + ".html")
        .then(content => {
            document.getElementById("content").innerHTML = content;
            // Load specific gadgets based on page name
            if (pageName === "homegadgets") {
                // Load home gadgets dynamically
                loadHomeGadgets();
            } else if (pageName === "electronicgadgets") {
                // Load electronic gadgets dynamically
                loadElectronicGadgets();
            } else if (pageName === "gaminggadgets") {
                loadGamingGadgets();
            }
            else if (pageName === "home") {
                loadHome();
            } else if (pageName === "products") {
                loadProducts();
            } else if (pageName === "cart") {
                loadCart();
            } else if (pageName === "login") {
                loadLogin();
                // Attach event listener to the login form
                document.getElementById('loginForm').addEventListener('submit', function (event) {
                    event.preventDefault(); // Prevent the default form submission
                    const formData = new FormData(this); // Get form data
                    const username = formData.get('username'); // Assuming input name is 'username'
                    const password = formData.get('password'); // Assuming input name is 'password'

                    // Validate username (minimum 4 characters)
                    if (username.length < 4) {
                        alert('Username must be at least 4 characters long.');
                        return;
                    }

                    // Validate password (minimum 8 characters)
                    if (password.length < 8) {
                        alert('Password must be at least 8 characters long.');
                        return;
                    }

                    console.log("Login - Username:", username);
                    console.log("Login - Password:", password);

                    // Clear username and password fields
                    this.reset();
                });
            } else if (pageName === "register") {
                loadRegister();                // Attach event listener to the register form
                document.getElementById('registerForm').addEventListener('submit', function (event) {
                    event.preventDefault(); // Prevent the default form submission
                    const formData = new FormData(this); // Get form data
                    const username = formData.get('username'); // Assuming input name is 'username'
                    const password = formData.get('password'); // Assuming input name is 'password'
                    const email = formData.get('email'); // Assuming input name is 'email'
                    const phone = formData.get('phone'); // Assuming input name is 'phone'

                    // Your existing registration logic

                    // Validate username (minimum 4 characters)
                    if (username.length < 4) {
                        alert('Username must be at least 4 characters long.');
                        return;
                    }

                    // Validate password (minimum 8 characters)
                    if (password.length < 8) {
                        alert('Password must be at least 8 characters long.');
                        return;
                    }

                    if (!email.endsWith('@gmail.com')) {
                        alert('Email must end with "@gmail.com".');
                        return;
                    }

                    // Validate phone number (minimum 9 characters)
                    if (phone.length < 9) {
                        alert('Phone number must be at least 9 characters long.');
                        return;
                    }


                    console.log("Register - Username:", username);
                    console.log("Register - Password:", password);
                    console.log("Register - Email:", email);
                    console.log("Register - Phone:", phone);
                    // Clear form fields
                    this.reset();
                });
            } else if (pageName === "profile") { // Add condition for the profile page
                loadProfile();
                // Attach event listener to the profile form
                document.getElementById('profileForm').addEventListener('submit', function (event) {
                    event.preventDefault(); // Prevent the default form submission
                    const formData = new FormData(this); // Get form data
                    const username = formData.get('username'); // Assuming input name is 'username'
                    const password = formData.get('password'); // Assuming input name is 'password'
                    const email = formData.get('email'); // Assuming input name is 'email'
                    const phone = formData.get('phone'); // Assuming input name is 'phone'

                    // Your existing profile update logic

                    // Validate username (minimum 4 characters)
                    if (username.length < 4) {
                        alert('Username must be at least 4 characters long.');
                        return;
                    }

                    // Validate password (minimum 8 characters)
                    if (password.length < 8) {
                        alert('Password must be at least 8 characters long.');
                        return;
                    }
                    if (!email.endsWith('@gmail.com')) {
                        alert('Email must end with "@gmail.com".');
                        return;
                    }

                    // Validate phone number (minimum 9 characters)
                    if (phone.length < 9) {
                        alert('Phone number must be at least 9 characters long.');
                        return;
                    }

                    console.log("Profile - Username:", username);
                    console.log("Profile - Password:", password);
                    console.log("Profile - Email:", email);
                    console.log("Profile - Phone:", phone);

                    // Clear form fields
                    this.reset();
                });
            }
        })
        .catch(error => {
            console.error('Error loading content:', error);
        });
}








// Function to fetch a file using Fetch API
function fetchFile(path) {
    return fetch(path)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
}

// Call loadPageContent when the page is loaded or when navigating
window.addEventListener("DOMContentLoaded", function () {
    // Load the initial page content based on the fragment identifier
    loadPageContent(getCurrentPageName());

    // Navigate whenever the fragment identifier value changes
    window.addEventListener("hashchange", function () {
        loadPageContent(getCurrentPageName());
    });

    
});

// Function to get the current page name based on the fragment identifier
function getCurrentPageName() {
    var fragmentId = location.hash.substr(1);
    return fragmentId || "home"; // Default to "home" if no fragment identifier is provided
}

// Function to load home gadgets dynamically
function loadHomeGadgets() {
    var products = [
        {
            "name": "Washing Machine",
            "imageUrl": "https://whirlpoolindia.vtexassets.com/arquivos/ids/167798-1200-auto?v=638379724617200000&width=1200&height=auto&aspect=true",
            "price": "$800.00 - $650.00"
        },
        {
            "name": "AC",
            "imageUrl": "http://www.whichtools.co/wp-content/uploads/2018/04/air-conditioner-1.jpg",
            "price": "<span class=\"text-muted text-decoration-line-through\">$2000.00</span> $1200.00"
        },
        {
            "name": "Microwave Oven",
            "imageUrl": "https://images.samsung.com/is/image/samsung/p6pim/ph/mg30t5018cc-tc/gallery/ph-mw5000t-mg30t5018cc-tc-530524580?$1300_1038_PNG$",
            "price": "<span class=\"text-muted text-decoration-line-through\">$1300.00</span> $1150.00"
        },
        {
            "name": "Hoover",
            "imageUrl": "https://hoover.com/cdn/shop/products/UH30601_ATF_1_Hero_1000x.jpg?v=1655846502",
            "price": "$400.00"
        },
        {
            "name": "Hair Dryer",
            "imageUrl": "https://i5.walmartimages.com/seo/Revlon-1875W-Compact-Hair-Dryer-Black_9b619d96-02a9-470c-8c84-8ec2fda3cf6c.5afe0804f72f7d268cdb573c763bdaaa.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF",
            "price": "<span class=\"text-muted text-decoration-line-through\">$300.00</span> $250.00"
        },
        {
            "name": "Blender",
            "imageUrl": "https://www.ariete.net/media/images/product/main/cache/800x800/ariete-power-blender-frullatore-283c7d9fb871111cfda50b38d8908629.jpg",
            "price": "$60.00 - $100.00"
        },
        {
            "name": "Toaster",
            "imageUrl": "https://m.media-amazon.com/images/I/71n-oeNV6BL._AC_SL1500_.jpg",
            "price": "<span class=\"text-muted text-decoration-line-through\">$80.00</span> $60.00"
        },
        {
            "name": "Air Fryer",
            "imageUrl": "https://lenoxx.com.au/cdn/shop/products/AF720_1024x1024.jpg?v=1623032522",
            "price": "$400.00"
        }
    ];

    var productContainer = document.querySelector(".product-container");

    products.forEach(product => {
        var productCard = document.createElement("div");
        productCard.classList.add("col-md-4", "mb-4");

        var card = `
           <div class="card h-100">
                <img src="${product.imageUrl}" class="card-img-top" alt="${product.name}">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">${product.price}</p>
                    <button class="btn btn-primary add-to-cart-btn">Add to Cart</button> <!-- Add to Cart button -->
                    <button class="btn btn-secondary view-description-btn">View Description</button> <!-- View Description button -->
                </div>
            </div>
        `;

        productCard.innerHTML = card;
        productContainer.appendChild(productCard);

        // Attach event listener to the "Add to Cart" button
        var addToCartBtn = productCard.querySelector('.add-to-cart-btn');
        addToCartBtn.addEventListener('click', function (event) {
            event.preventDefault();
            console.log("Added to cart:", product.name);
        });

        // Attach event listener to the "View Description" button
        var viewDescriptionBtn = productCard.querySelector('.view-description-btn');
        viewDescriptionBtn.addEventListener('click', function (event) {
            event.preventDefault();
            var productName = product.name;
            fetch('descriptions.json')
                .then(response => response.json())
                .then(descriptions => {
                    var description = descriptions[productName];
                    if (description) {
                        console.log("Description for", productName + ":", description);
                        // Here you can display the description wherever you want, such as in a modal or a tooltip.
                    } else {
                        console.log("Description not found for", productName);
                    }
                })
                .catch(error => console.error('Error fetching descriptions:', error));
        });
    });
    // Search functionality
    document.getElementById('searchBtn').addEventListener('click', function () {
        var searchQuery = document.getElementById('searchInput').value.toLowerCase().trim();

        // Find all elements where you want to search for the text
        var elementsToSearch = document.querySelectorAll('.card-title, .card-text, h1, h2, h3, p,strong');

        // Iterate through elements and check for the search query
        elementsToSearch.forEach(element => {
            var textContent = element.textContent.toLowerCase();
            if (textContent.includes(searchQuery)) {
                // Scroll to the element
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                // Highlight the found text or apply any other desired styling
                element.style.backgroundColor = 'yellow';
                setTimeout(() => {
                    element.style.backgroundColor = ''; // Remove highlighting after a brief delay
                }, 2000);
            }
        });
    });
}

// Function to load electronic gadgets dynamically
function loadElectronicGadgets() {
    var products = [


        {   
            "name": "IPhone 15",
            "imageUrl": "https://phones.mintmobile.com/wp-content/uploads/2023/09/Apple_iPhone_15_Black_PDP_Image.png",
            "price": "$2500.00"
        },

        {
            "name": "IPad Pro",
            "imageUrl": "https://i0.wp.com/iqmobile.ba/wp-content/uploads/2022/09/preview-1.png?fit=922%2C1024&ssl=1",
            "price": "$8000.00 - $6500.00"
        },
        {
            "name": "MacBook Pro",
            "imageUrl": "https://atstore.ba/wp-content/uploads/2022/06/macbook_pro_13_in_space_gray_pdp_image_position-2__wwen_4.jpeg",
            "price": "<span class=\"text-muted text-decoration-line-through\">$5000.00</span> $3200.00"
        },
        {
            "name": "IPhone 12",
            "imageUrl": "https://www.backmarket.com/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D828/https://d2e6ccujb3mkqf.cloudfront.net/a105ef3d-226c-4d2b-815e-9e81ce15f191-1_c18e6da2-2c93-41fe-9d34-faaf85b94330.jpg",
            "price": "$400.00"
        },
        {
            "name": "MacBook Air",
            "imageUrl": "https://falcon.co.ke/wp-content/uploads/2022/10/McBook-Air-13.jpg",
            "price": "$2000.00"
        },
        {
            "name": "IPhone 13 Mini",
            "imageUrl": "https://mobitelstudio.ba/storage/2023/10/IPHONE-13-MS-WB-1.png",
            "price": "$1000.00"
        },
        {
            "name": "AirPods Pro",
            "imageUrl": "https://m.media-amazon.com/images/I/61f1YfTkTDL._AC_SL1500_.jpg",
            "price": "<span class=\"text-muted text-decoration-line-through\">$1500.00</span> $1200.00"
        },
        {
            "name": "Apple Watch",
            "imageUrl": "https://alephksa.com/cdn/shop/files/Apple_Watch_Series_8_GPS_45mm_Starlight_Aluminum_Starlight_Sport_Band_PDP_Image_Position-1__en-US_1680x.jpg?v=1699028675",
            "price": "$500.00"
        }
    ];

    var productContainer = document.querySelector(".product-container");

    products.forEach(product => {
        var productCard = document.createElement("div");
        productCard.classList.add("col-md-4", "mb-4");

        var card = `
           <div class="card h-100">
                <img src="${product.imageUrl}" class="card-img-top" alt="${product.name}">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">${product.price}</p>
                    <button class="btn btn-primary add-to-cart-btn">Add to Cart</button> <!-- Add to Cart button -->
                    <button class="btn btn-secondary view-description-btn">View Description</button> <!-- View Description button -->
                </div>
            </div>
        `;

        productCard.innerHTML = card;
        productContainer.appendChild(productCard);

        // Attach event listener to the "Add to Cart" button
        var addToCartBtn = productCard.querySelector('.add-to-cart-btn');
        addToCartBtn.addEventListener('click', function (event) {
            event.preventDefault();
            console.log("Added to cart:", product.name);
        });

        // Attach event listener to the "View Description" button
        var viewDescriptionBtn = productCard.querySelector('.view-description-btn');
        viewDescriptionBtn.addEventListener('click', function (event) {
            event.preventDefault();
            var productName = product.name;
            fetch('descriptions.json')
                .then(response => response.json())
                .then(descriptions => {
                    var description = descriptions[productName];
                    if (description) {
                        console.log("Description for", productName + ":", description);
                        // Here you can display the description wherever you want, such as in a modal or a tooltip.
                    } else {
                        console.log("Description not found for", productName);
                    }
                })
                .catch(error => console.error('Error fetching descriptions:', error));
        });
    });
    // Search functionality
    document.getElementById('searchBtn').addEventListener('click', function () {
        var searchQuery = document.getElementById('searchInput').value.toLowerCase().trim();

        // Find all elements where you want to search for the text
        var elementsToSearch = document.querySelectorAll('.card-title, .card-text, h1, h2, h3, p,strong');

        // Iterate through elements and check for the search query
        elementsToSearch.forEach(element => {
            var textContent = element.textContent.toLowerCase();
            if (textContent.includes(searchQuery)) {
                // Scroll to the element
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                // Highlight the found text or apply any other desired styling
                element.style.backgroundColor = 'yellow';
                setTimeout(() => {
                    element.style.backgroundColor = ''; // Remove highlighting after a brief delay
                }, 2000);
            }
        });
    });
}


// Function to load gaming gadgets dynamically
function loadGamingGadgets() {
    var products = [
        {
            "name": "Headset",
            "imageUrl": "https://m.media-amazon.com/images/I/61Qd3f00KqL._AC_SL1500_.jpg",
            "price": "$1000.00 - $1200.00"
        },
        {
            "name": "Keyboard",
            "imageUrl": "https://rukminim2.flixcart.com/image/832/832/xif0q/keyboard/desktop-keyboard/w/l/6/gaming-keyboard-with-87-keys-rgb-backlit-with-suspension-keys-original-imagzcgwtrabgjna.jpeg?q=70&crop=false",
            "price": "<span class=\"text-muted text-decoration-line-through\">$800.00</span> $500.00"
        },
        {
            "name": "Gaming PC",
            "imageUrl": "https://m.media-amazon.com/images/I/91LSF1iZUFL._AC_SL1500_.jpg",
            "price": "<span class=\"text-muted text-decoration-line-through\">$7000.00</span> $5000.00"
        },
        {
            "name": "Monitor",
            "imageUrl": "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/peripherals/monitors/p-series/p2424ht/media-gallery/monitor-p2424ht-black-gallery-2.psd?fmt=png-alpha&pscan=auto&scl=1&hei=476&wid=595&qlt=100,1&resMode=sharp2&size=595,476&chrss=full",
            "price": "$632.00"
        },
        {
            "name": "Laptop Cooler",
            "imageUrl": "https://d3e54emdgoy1fq.cloudfront.net/uploads/product/image/424768/medium_plus_99cb6-PrimeCables-PC-CM-S18-BL-Brands-LED-.jpg",
            "price": "<span class=\"text-muted text-decoration-line-through\">$500.00</span> $300.00"
        },
        {
            "name": "Power Bank",
            "imageUrl": "https://target.scene7.com/is/image/Target/GUEST_a2071fd7-c7b3-4800-a9e4-1afd589d63ad?wid=1200&hei=1200&qlt=80&fmt=webp",
            "price": "$80.00 - $95.00"
        },
        {
            "name": "Gaming Mouse",
            "imageUrl": "https://m.media-amazon.com/images/I/61lCLrCtuhL._AC_SL1000_.jpg",
            "price": "<span class=\"text-muted text-decoration-line-through\">$180.00</span> $100.00"
        },
        {
            "name": "Joysticks",
            "imageUrl": "https://i5.walmartimages.com/seo/EasySMX-Wired-PC-Steam-Game-Controller-Gamepad-Joysticks-Dual-Shock-for-Windows-Android-PS3-TV-Box-Tesla-ESM-9100-Black-Gray_38082158-63af-479f-8886-085fc10f853d.f0e84647b055c89ed67bca89a4215b08.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF",
            "price": "$300.00"
        }
    ];

    var productContainer = document.querySelector(".product-container");

    products.forEach(product => {
        var productCard = document.createElement("div");
        productCard.classList.add("col-md-4", "mb-4");

        var card = `
           <div class="card h-100">
                <img src="${product.imageUrl}" class="card-img-top" alt="${product.name}">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">${product.price}</p>
                    <button class="btn btn-primary add-to-cart-btn">Add to Cart</button>
                    <button class="btn btn-secondary view-description-btn">View Description</button>
                </div>
            </div>
        `;

        productCard.innerHTML = card;
        productContainer.appendChild(productCard);

        // Attach event listener to the "Add to Cart" button
        var addToCartBtn = productCard.querySelector('.add-to-cart-btn');
        addToCartBtn.addEventListener('click', function (event) {
            event.preventDefault();
            console.log("Added to cart:", product.name);
        });

        // Attach event listener to the "View Description" button
        var viewDescriptionBtn = productCard.querySelector('.view-description-btn');
        viewDescriptionBtn.addEventListener('click', function (event) {
            event.preventDefault();
            var productName = product.name;
            fetch('descriptions.json')
                .then(response => response.json())
                .then(descriptions => {
                    var description = descriptions[productName];
                    if (description) {
                        console.log("Description for", productName + ":", description);
                        // Here you can display the description wherever you want, such as in a modal or a tooltip.
                    } else {
                        console.log("Description not found for", productName);
                    }
                })
                .catch(error => console.error('Error fetching descriptions:', error));
        });
    });

    // Search functionality
    document.getElementById('searchBtn').addEventListener('click', function () {
        var searchQuery = document.getElementById('searchInput').value.toLowerCase().trim();

        // Find all elements where you want to search for the text
        var elementsToSearch = document.querySelectorAll('.card-title, .card-text, h1, h2, h3, p,strong');

        // Iterate through elements and check for the search query
        elementsToSearch.forEach(element => {
            var textContent = element.textContent.toLowerCase();
            if (textContent.includes(searchQuery)) {
                // Scroll to the element
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                // Highlight the found text or apply any other desired styling
                element.style.backgroundColor = 'yellow';
                setTimeout(() => {
                    element.style.backgroundColor = ''; // Remove highlighting after a brief delay
                }, 2000);
            }
        });
    });
}
   



// Function to fetch cart data from cart.json and populate the cart items dynamically
function loadCart() {
    fetch('cart.json')
        .then(response => response.json())
        .then(data => {
            const cartItemsContainer = document.getElementById('cartItemsContainer');

            // Iterate over each item in the JSON data
            data.forEach(item => {
                // Create table row
                const row = document.createElement('tr');

                // Create image cell
                const imgCell = document.createElement('td');
                const img = document.createElement('img');
                img.src = item.imageUrl;
                img.className = 'img-fluid rounded-3';
                img.alt = item.name;
                imgCell.appendChild(img);
                row.appendChild(imgCell);

                // Create name cell
                const nameCell = document.createElement('td');
                nameCell.textContent = item.name;
                row.appendChild(nameCell);

                // Create quantity cell
                const quantityCell = document.createElement('td');
                const quantityInput = document.createElement('input');
                quantityInput.type = 'number';
                quantityInput.value = item.quantity;
                quantityInput.className = 'form-control form-control-sm text-center';
                quantityInput.addEventListener('change', function () {
                    const newQuantity = parseInt(this.value);
                    const oldQuantity = item.quantity;
                    if (newQuantity > oldQuantity) {
                        console.log('Quantity increased for', item.name);
                    } else if (newQuantity < oldQuantity) {
                        console.log('Quantity decreased for', item.name);
                    }
                    // Update the item quantity in the data
                    item.quantity = newQuantity;
                });
                quantityCell.appendChild(quantityInput);
                row.appendChild(quantityCell);

                // Create price cell
                const priceCell = document.createElement('td');
                // Parse the price string to a number and then calculate the total price
                const price = parseFloat(item.price.replace('$', ''));
                const totalPrice = price * item.quantity;
                priceCell.textContent = '$' + totalPrice.toFixed(2);
                row.appendChild(priceCell);

                // Create remove button cell
                const removeCell = document.createElement('td');
                const removeLink = document.createElement('a');
                removeLink.href = '#!';
                removeLink.className = 'delete-btn'; // Add a class for easy identification
                removeLink.dataset.name = item.name; // Store the item name as a data attribute
                const removeIcon = document.createElement('i');
                removeIcon.className = 'fas fa-trash fa-lg text-danger';
                removeLink.appendChild(removeIcon);
                removeCell.appendChild(removeLink);
                row.appendChild(removeCell);

                // Append row to the container
                cartItemsContainer.appendChild(row);
            });

            // Attach event listeners to delete buttons after all rows are created
            const deleteButtons = document.querySelectorAll('.delete-btn');
            deleteButtons.forEach(button => {
                button.addEventListener('click', function (event) {
                    event.preventDefault();
                    const itemName = this.dataset.name; // Retrieve the item name from data attribute
                    const rowToRemove = this.closest('tr'); // Find the closest row to the clicked button
                    rowToRemove.remove(); // Remove the row from the table
                    console.log("Deleted item:", itemName);
                });
            });
        })
        .catch(error => console.error('Error fetching data:', error));

    // Search functionality
    document.getElementById('searchBtn').addEventListener('click', function () {
        var searchQuery = document.getElementById('searchInput').value.toLowerCase().trim();

        // Find all elements where you want to search for the text
        var elementsToSearch = document.querySelectorAll('.card-title, .card-text, h1, h2, h3, p,strong');

        // Iterate through elements and check for the search query
        elementsToSearch.forEach(element => {
            var textContent = element.textContent.toLowerCase();
            if (textContent.includes(searchQuery)) {
                // Scroll to the element
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                // Highlight the found text or apply any other desired styling
                element.style.backgroundColor = 'yellow';
                setTimeout(() => {
                    element.style.backgroundColor = ''; // Remove highlighting after a brief delay
                }, 2000);
            }
        });
    });
}






function loadHome() {
    fetch('home.json')
        .then(response => response.json())
        .then(data => {
            // Populate home content
            document.getElementById('homeTitle').textContent = data.homeContent.title;
            document.getElementById('homeDescription').textContent = data.homeContent.description;
            document.getElementById('homeImage').src = data.homeContent.imageSrc;

            // Populate other cards
            const otherContainer = document.getElementById('other');
            otherContainer.innerHTML = ""; // Clear previous content
            data.otherCards.forEach(card => {
                const cardHtml = `
          <div class="col-md-4 py-3 py-md-0">
            <div class="card">
              <img src="${card.imageSrc}" alt="">
              <div class="card-img-overlay">
                <h3><a href="${card.link}">${card.title}</a></h3>
              </div>
            </div>
          </div>`;
                otherContainer.innerHTML += cardHtml;
            });

            // Populate offer
            const offerContainer = document.getElementById('offer');
            offerContainer.innerHTML = ""; // Clear previous content
            data.offer.forEach(offerItem => {
                const offerHtml = `
          <div class="col-md-3 py-3 py-md-0">
            <i class="fa-solid fa-${offerItem.icon}"></i>
            <h3>${offerItem.title}</h3>
            <p>${offerItem.description}</p>
          </div>`;
                offerContainer.innerHTML += offerHtml;
            });
        })
        .catch(error => console.error('Error fetching JSON:', error));


    // Search functionality
    document.getElementById('searchBtn').addEventListener('click', function () {
        var searchQuery = document.getElementById('searchInput').value.toLowerCase().trim();

        // Find all elements where you want to search for the text
        var elementsToSearch = document.querySelectorAll('.card-title, .card-text, h1, h2, h3, p,strong');

        // Iterate through elements and check for the search query
        elementsToSearch.forEach(element => {
            var textContent = element.textContent.toLowerCase();
            if (textContent.includes(searchQuery)) {
                // Scroll to the element
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                // Highlight the found text or apply any other desired styling
                element.style.backgroundColor = 'yellow';
                setTimeout(() => {
                    element.style.backgroundColor = ''; // Remove highlighting after a brief delay
                }, 2000);
            }
        });
    });
}



function loadProducts() {
    fetch('products.json')
        .then(response => response.json())
        .then(data => {
            // Populate home content
            document.getElementById('homeTitle').textContent = data.homeContent.title;
            document.getElementById('homeDescription').textContent = data.homeContent.description;
            document.getElementById('homeImage').src = data.homeContent.imageSrc;

            // Populate other cards
            const otherContainer = document.getElementById('other');
            otherContainer.innerHTML = ""; // Clear previous content
            const otherCardsRow = document.createElement('div');
            otherCardsRow.classList.add('row', 'justify-content-center');
            data.otherCards.forEach(card => {
                const cardHtml = `
          <div class="col-md-4 py-3 py-md-0">
            <div class="card">
              <img src="${card.imageSrc}" alt="">
              <div class="card-img-overlay">
                <h3><a href="${card.link}">${card.title}</a></h3>
              </div>
            </div>
          </div>`;
                otherCardsRow.innerHTML += cardHtml;
            });
            otherContainer.appendChild(otherCardsRow);

            // Populate offer
            const offerContainer = document.getElementById('offer');
            offerContainer.innerHTML = ""; // Clear previous content
            const offerRow = document.createElement('div');
            offerRow.classList.add('row', 'justify-content-center');
            data.offer.forEach(offerItem => {
                const offerHtml = `
          <div class="col-md-3 py-3 py-md-0">
            <i class="fa-solid fa-${offerItem.icon}"></i>
            <h3>${offerItem.title}</h3>
            <p>${offerItem.description}</p>
          </div>`;
                offerRow.innerHTML += offerHtml;
            });
            offerContainer.appendChild(offerRow);
        })
        .catch(error => console.error('Error fetching JSON:', error));

    // Search functionality
    document.getElementById('searchBtn').addEventListener('click', function () {
        var searchQuery = document.getElementById('searchInput').value.toLowerCase().trim();

        // Find all elements where you want to search for the text
        var elementsToSearch = document.querySelectorAll('.card-title, .card-text, h1, h2, h3, p,strong');

        // Iterate through elements and check for the search query
        elementsToSearch.forEach(element => {
            var textContent = element.textContent.toLowerCase();
            if (textContent.includes(searchQuery)) {
                // Scroll to the element
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                // Highlight the found text or apply any other desired styling
                element.style.backgroundColor = 'yellow';
                setTimeout(() => {
                    element.style.backgroundColor = ''; // Remove highlighting after a brief delay
                }, 4000);
            }
        });
    });
}

function loadLogin() {
    fetch('login.json')
        .then(response => response.json())
        .then(data => {
            document.getElementById('loginTitle').textContent = data.loginContent.title;
            document.getElementById('loginSubtitle').textContent = data.loginContent.subtitle;
            document.getElementById('loginDescription').textContent = data.loginContent.description;

            const form = data.loginContent.form;
            const formInputsContainer = document.getElementById('loginForm');
            form.inputs.forEach(input => {
                const inputElement = document.createElement('input');
                inputElement.type = input.type;
                inputElement.placeholder = input.placeholder;
                inputElement.name = input.name;
                inputElement.classList = input.class;
                formInputsContainer.appendChild(inputElement);
            });

            const button = form.button;
            const buttonElement = document.createElement('button');
            buttonElement.type = button.type;
            buttonElement.textContent = button.text;
            buttonElement.classList = button.class;
            // Append the button to the form container
            formInputsContainer.appendChild(buttonElement);
        })
        .catch(error => console.error('Error fetching JSON:', error));
    // Search functionality
    document.getElementById('searchBtn').addEventListener('click', function () {
        var searchQuery = document.getElementById('searchInput').value.toLowerCase().trim();

        // Find all elements where you want to search for the text
        var elementsToSearch = document.querySelectorAll('.card-title, .card-text, h1, h2, h3, p,strong');

        // Iterate through elements and check for the search query
        elementsToSearch.forEach(element => {
            var textContent = element.textContent.toLowerCase();
            if (textContent.includes(searchQuery)) {
                // Scroll to the element
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                // Highlight the found text or apply any other desired styling
                element.style.backgroundColor = 'yellow';
                setTimeout(() => {
                    element.style.backgroundColor = ''; // Remove highlighting after a brief delay
                }, 4000);
            }
        });
    });
}

function loadProfile() {
    fetch('profile.json')
        .then(response => response.json())
        .then(data => {
            document.getElementById('profileTitle').textContent = data.profileContent.title;
            document.getElementById('profileSubtitle').textContent = data.profileContent.title;

            const form = data.profileContent.form;
            const formInputsContainer = document.getElementById('profileForm');
            form.inputs.forEach(input => {
                const inputElement = document.createElement('input');
                inputElement.type = input.type;
                inputElement.placeholder = input.placeholder;
                inputElement.name = input.name;
                inputElement.classList = input.class;
                formInputsContainer.appendChild(inputElement);
            });

            const button = form.button;
            const buttonElement = document.createElement('button');
            buttonElement.type = button.type;
            buttonElement.textContent = button.text;
            buttonElement.classList = button.class;
            // Append the button to the form container
            formInputsContainer.appendChild(buttonElement);
        })
        .catch(error => console.error('Error fetching JSON:', error));
    // Search functionality
    document.getElementById('searchBtn').addEventListener('click', function () {
        var searchQuery = document.getElementById('searchInput').value.toLowerCase().trim();

        // Find all elements where you want to search for the text
        var elementsToSearch = document.querySelectorAll('.card-title, .card-text, h1, h2, h3, p,strong');

        // Iterate through elements and check for the search query
        elementsToSearch.forEach(element => {
            var textContent = element.textContent.toLowerCase();
            if (textContent.includes(searchQuery)) {
                // Scroll to the element
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                // Highlight the found text or apply any other desired styling
                element.style.backgroundColor = 'yellow';
                setTimeout(() => {
                    element.style.backgroundColor = ''; // Remove highlighting after a brief delay
                }, 4000);
            }
        });
    });
}

function loadRegister() {
    fetch('register.json')
        .then(response => response.json())
        .then(data => {
            document.getElementById('registerTitle').textContent = data.registerContent.title;
            document.getElementById('registerSubtitle').textContent = data.registerContent.subtitle;
            document.getElementById('registerDescription').textContent = data.registerContent.description;

            const form = data.registerContent.form;
            const formInputsContainer = document.getElementById('registerForm');
            form.inputs.forEach(input => {
                const inputElement = document.createElement('input');
                inputElement.type = input.type;
                inputElement.placeholder = input.placeholder;
                inputElement.name = input.name;
                inputElement.classList = input.class;
                formInputsContainer.appendChild(inputElement);
            });

            const button = form.button;
            const buttonElement = document.createElement('button');
            buttonElement.type = button.type;
            buttonElement.textContent = button.text;
            buttonElement.classList = button.class;
            document.getElementById('registerForm').appendChild(buttonElement);
        })
        .catch(error => console.error('Error fetching JSON:', error));
    // Search functionality
    document.getElementById('searchBtn').addEventListener('click', function () {
        var searchQuery = document.getElementById('searchInput').value.toLowerCase().trim();

        // Find all elements where you want to search for the text
        var elementsToSearch = document.querySelectorAll('.card-title, .card-text, h1, h2, h3, p,strong');

        // Iterate through elements and check for the search query
        elementsToSearch.forEach(element => {
            var textContent = element.textContent.toLowerCase();
            if (textContent.includes(searchQuery)) {
                // Scroll to the element
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                // Highlight the found text or apply any other desired styling
                element.style.backgroundColor = 'yellow';
                setTimeout(() => {
                    element.style.backgroundColor = ''; // Remove highlighting after a brief delay
                }, 4000);
            }
        });
    });
}










