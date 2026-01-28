const scrollContainer = document.getElementById("doctorScroll");

let scrollAmount = 0;

function autoScroll() {
    scrollAmount += 0.2; // smaller = slower
    scrollContainer.style.transform = `translateX(-${scrollAmount}px)`;

    if (scrollAmount >= scrollContainer.scrollWidth / 2) {
        scrollAmount = 0;
    }

    requestAnimationFrame(autoScroll);
}
const doctorsData = {
    cardiology: [
        { name: "Dr. Vikram Patel", degree: "DM Cardiology", time: "10 AM – 2 PM" },
        { name: "Dr. Neha Kapoor", degree: "MD, DNB Cardiology", time: "4 PM – 7 PM" }
    ],
    orthopaedics: [
        { name: "Dr. Ananya Sen", degree: "MS Orthopaedics", time: "11 AM – 3 PM" }
    ],
    neurology: [
        { name: "Dr. R. Mehta", degree: "DM Neurology", time: "9 AM – 12 PM" }
    ],
    gynaecology: [
        { name: "Dr. Priya Sharma", degree: "MS Gynae", time: "5 PM – 8 PM" }
    ],
    pediatrics: [
        { name: "Dr. Arjun Das", degree: "MD Pediatrics", time: "10 AM – 1 PM" }
    ],
    emergency: [
        { name: "24×7 Emergency Team", degree: "Trauma & Critical Care", time: "Available Anytime" }
    ]
};

autoScroll();

function openDoctors(department) {
    const modal = document.getElementById("doctorModal");
    const list = document.getElementById("doctorList");
    const title = document.getElementById("modalTitle");

    list.innerHTML = "";
    title.innerText = department.charAt(0).toUpperCase() + department.slice(1) + " Specialists";

    doctorsData[department].forEach(doc => {
        const p = document.createElement("p");
        p.innerHTML = `<strong>${doc.name}</strong><br>${doc.degree}<br>Visiting: ${doc.time}`;
        list.appendChild(p);
    });

    modal.style.display = "block";
}

function closeModal() {
    document.getElementById("doctorModal").style.display = "none";
}

window.onclick = function (event) {
    const modal = document.getElementById("doctorModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
