<template>
    <div class="relative min-h-screen bg-gray-100">
        <header class="flex items-center justify-between w-full h-16 px-6 shadow-lg bg-gradient-to-r from-gray-200">
            <slot name="header" />
        </header>

        <main class="w-full p-6">
            <slot />
        </main>

        <footer class="py-2">
            <slot name="footer" />
        </footer>
    </div>
</template>