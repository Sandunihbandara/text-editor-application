document.addEventListener("DOMContentLoaded", function () {
  const editor = document.getElementById("editor");
  const colorPicker = document.getElementById("fontColor");

  // check the update toolbar
  document.querySelectorAll("[data-edit]").forEach((button) => {
    button.addEventListener("click", () => {
      const command = button.getAttribute("data-edit");
      document.execCommand(command, false, null);
      updateToolbar();
    });
  });

  // Update toolbar in to active
  editor.addEventListener("mouseup", updateToolbar);

  // Color changer
  colorPicker.addEventListener("change", function () {
    const color = this.value;
    document.execCommand("foreColor", false, color);
  });

  // change color of button
  function updateToolbar() {
    document.querySelectorAll("[data-edit]").forEach((button) => {
      const cmd = button.getAttribute("data-edit");
      const isActive = document.queryCommandState(cmd);
      button.classList.toggle("active", isActive);
    });
  }
});
