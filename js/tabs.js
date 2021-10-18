document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.work__step').forEach(function(stepBtn) {
    stepBtn.addEventListener('click', function(eventStep) {
      const path = eventStep.currentTarget.dataset.path;
      document.querySelectorAll('.work__step').forEach(function(btn) {
        btn.classList.remove('work__step--active')
      });
      eventStep.currentTarget.classList.add('work__step--active');
      document.querySelectorAll('.work__consultation').forEach(function(tabContent) {
        tabContent.classList.remove('work__consultation-active')
      });
      document.querySelector(`[data-target="${path}"]`).classList.add('work__consultation-active')
    });
  })
})
