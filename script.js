// ===== Flower Bloom Logic =====
const flowers = document.querySelectorAll('.flower');

flowers.forEach(flower => {
    flower.addEventListener('click', () => {
        toggleBloom(flower);
    });
});

// Reusable function to toggle bloom
function toggleBloom(element) {
    element.classList.toggle('bloom');
}

// ===== Magic Button Logic =====
const magicButton = document.getElementById('magicButton');
const butterflies = [document.getElementById('butterfly1'), document.getElementById('butterfly2')];
const popup = document.getElementById('popup');
const closePopupBtn = document.getElementById('closePopup');

magicButton.addEventListener('click', () => {
    triggerMagic(5); // Number of random flowers to bloom
    showButterflies();
    showPopup();
});

// Function to bloom random flowers
function triggerMagic(number) {
    for (let i = 0; i < number; i++) {
        const randomFlower = flowers[Math.floor(Math.random() * flowers.length)];
        toggleBloom(randomFlower);
    }
}

// Function to show butterflies
function showButterflies() {
    butterflies.forEach(butterfly => {
        butterfly.classList.add('active');
        setTimeout(() => {
            butterfly.classList.remove('active');
        }, 4000); // butterflies flutter for 4 seconds
    });
}

// Function to show popup
function showPopup() {
    popup.classList.add('show');
}

// Close popup
closePopupBtn.addEventListener('click', () => {
    popup.classList.remove('show');
});
