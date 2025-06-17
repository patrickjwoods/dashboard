// Toggle workspace details
function toggleWorkspaceDetails() {
  const details = document.getElementById('workspace-details');
  if (details.classList.contains('hidden')) {
    details.classList.remove('hidden');
  } else {
    details.classList.add('hidden');
  }
}

document.addEventListener('DOMContentLoaded', function() {
  const btn = document.getElementById('toggle-workspace');
  if (btn) {
    btn.addEventListener('click', toggleWorkspaceDetails);
  }
}); 