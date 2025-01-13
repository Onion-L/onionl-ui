<template>
  <div class="flex gap-4 items-center">
    <!-- Image error will show initials -->
    <ol-avatar
      src="/invalid-image.jpg"
      initials="JD"
      background-color="var(--ol-primary-100)"
    />

    <!-- Image error will show icon -->
    <ol-avatar
      src="/invalid-image.jpg"
      icon="i-mi-person"
      background-color="var(--ol-success-100)"
    />

    <!-- Image error will show text -->
    <ol-avatar
      src="/invalid-image.jpg"
      fallback-text="User"
      background-color="var(--ol-warning-100)"
    />
  </div>
</template>
