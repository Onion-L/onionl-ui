<template>
  <div class="flex gap-4 items-center">
    <!-- Image error will show initials -->
    <ol-avatar
      src="/invalid-image.jpg"
      initials="Buzz Lightyear"
      background-color="#0ea5e9"
    />

    <ol-avatar
      src="/invalid-image.jpg"
      initials="Buzz-Light_Year"
      background-color="#0ea5e9"
    />

    <!-- Image error will show icon -->
    <ol-avatar
      src="/invalid-image.jpg"
      icon="i-mi-user"
      background-color="#10b981"
    />

    <!-- Image error will show text -->
    <ol-avatar
      src="/invalid-image.jpg"
      fallback-text="User"
      background-color="#f59e0b"
    />
  </div>
</template>
