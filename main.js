
// Iraqi Data Lab - JavaScript
// Author: Your Name
// Date: 2026
// Features: Hover effects, Modals, Dynamic Text, Notifications

document.addEventListener("DOMContentLoaded", function() {

    /* =============================
       Hover Effects للأزرار والبطاقات
    ============================= */
    const buttons = document.querySelectorAll(".btn");
    const cards = document.querySelectorAll(".card, .solution-card");

    buttons.forEach(btn => {
        btn.addEventListener("mouseenter", () => {
            btn.style.transform = "translateY(-3px)";
            btn.style.boxShadow = "0 6px 12px rgba(0,0,0,0.15)";
        });
        btn.addEventListener("mouseleave", () => {
            btn.style.transform = "translateY(0)";
            btn.style.boxShadow = "0 4px 10px rgba(0,0,0,0.08)";
        });
    });

    cards.forEach(card => {
        card.addEventListener("mouseenter", () => {
            card.style.transform = "translateY(-5px)";
            card.style.boxShadow = "0 8px 16px rgba(0,0,0,0.12)";
        });
        card.addEventListener("mouseleave", () => {
            card.style.transform = "translateY(0)";
            card.style.boxShadow = "0 4px 10px rgba(0,0,0,0.08)";
        });
    });

    /* =============================
       Modal لعرض تفاصيل الحلول
       صفحة: submit-solution.html + student-submit-sol.html
    ============================= */
    const detailButtons = document.querySelectorAll(".solution-card .btn");
    
    detailButtons.forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            const url = btn.getAttribute("href");

            // فتح الحل داخل Modal
            openSolutionModal(url);
        });
    });

    function openSolutionModal(url) {
        // إنشاء Modal
        const modal = document.createElement("div");
        modal.classList.add("modal");
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close">&times;</span>
                <iframe src="${url}" frameborder="0" width="100%" height="400px"></iframe>
            </div>
        `;
        document.body.appendChild(modal);

        // إغلاق Modal
        modal.querySelector(".close").addEventListener("click", () => {
            modal.remove();
        });

        // اضغط خارج المحتوى لإغلاق
        modal.addEventListener("click", (e) => {
            if(e.target === modal) modal.remove();
        });
    }

    /* =============================
       Dynamic Button Text عند الاختيار
    ============================= */
    const submitButtons = document.querySelectorAll("form button");

    submitButtons.forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            const originalText = btn.textContent;
            btn.textContent = "تم الإرسال ";
            btn.disabled = true;

            setTimeout(() => {
                btn.textContent = originalText;
                btn.disabled = false;
            }, 2000);
        });
    });

    /* =============================
       Notification عند اختيار الحل
       صفحة: solution-details.html
    ============================= */
    const selectSolutionBtn = document.querySelector(".solution-detail .btn");
    if(selectSolutionBtn) {
        selectSolutionBtn.addEventListener("click", () => {
            showNotification("تم اختيار الحل بنجاح! ");
        });
    }

    function showNotification(message) {
        const notif = document.createElement("div");
        notif.classList.add("notification");
        notif.textContent = message;
        document.body.appendChild(notif);

        setTimeout(() => {
            notif.classList.add("fade-out");
        }, 2000);

        setTimeout(() => {
            notif.remove();
        }, 2500);
    }

});
