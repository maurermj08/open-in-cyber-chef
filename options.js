// Saves options to chrome.storage
function save_options() {
  var custom_url = document.getElementById('cyberchef_url').value;
  console.log("SET")
  chrome.storage.sync.set({
    my_url: custom_url
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

// Restores default value
function restore_options() {
  console.log("RESET!");
  chrome.storage.sync.get({
    my_url: 'https://gchq.github.io/CyberChef'
  }, function(items) {
    document.getElementById('cyberchef_url').value = items.my_url;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);
document.getElementById('reset').addEventListener('click', restore_options);