<script setup>
import { Head, Link } from '@inertiajs/vue3';
import { ref, onMounted, onUnmounted } from 'vue';

const isDropdownOpen = ref(false);

const toggleDropdown = () => {
    isDropdownOpen.value = !isDropdownOpen.value;
};

// Close dropdown when clicking outside
const closeDropdown = (event) => {
    if (!event.target.closest('.nav-item.dropdown')) {
        isDropdownOpen.value = false;
    }
};

// Add click event listener when component is mounted
onMounted(() => {
    document.addEventListener('click', closeDropdown);
});

// Remove event listener when component is unmounted
onUnmounted(() => {
    document.removeEventListener('click', closeDropdown);
});
</script>

<template>

    <Head title="Dashboard" />
    <div class="wrapper">
        <!-- Navbar -->
        <nav class="main-header navbar navbar-expand navbar-white navbar-light">
            <!-- Left navbar links -->
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" data-widget="pushmenu" href="#" role="button">
                        <i class="fas fa-bars"></i>
                    </a>
                </li>
            </ul>

            <!-- Right navbar links -->
            <ul class="navbar-nav ml-auto">
                <li class="nav-item dropdown" :class="{ 'show': isDropdownOpen }">
                    <a class="nav-link dropdown-toggle" href="#" @click.prevent="toggleDropdown">
                        <i class="fas fa-user mr-2"></i>
                        {{ $page.props.auth.user.name }}
                    </a>
                    <div class="dropdown-menu dropdown-menu-right" :class="{ 'show': isDropdownOpen }">
                        <Link :href="route('profile.edit')" class="dropdown-item">
                        <i class="fas fa-user-circle mr-2"></i> Profile
                        </Link>
                        <div class="dropdown-divider"></div>
                        <Link :href="route('logout')" method="post" as="button" class="dropdown-item text-danger">
                        <i class="fas fa-sign-out-alt mr-2"></i> Logout
                        </Link>
                    </div>
                </li>
            </ul>
        </nav>

        <!-- Main Sidebar Container -->
        <aside class="main-sidebar sidebar-dark-primary elevation-4">
            <!-- Brand Logo -->
            <Link :href="route('dashboard')" class="brand-link">
            <span class="brand-text font-weight-light">Your App</span>
            </Link>

            <!-- Sidebar -->
            <div class="sidebar">
                <!-- Sidebar Menu -->
                <nav class="mt-2">
                    <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu">
                        <li class="nav-item">
                            <Link :href="route('dashboard')" class="nav-link"
                                :class="{ active: route().current('dashboard') }">
                            <i class="nav-icon fas fa-tachometer-alt"></i>
                            <p>Dashboard</p>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </aside>

        <!-- Content Wrapper -->
        <div class="content-wrapper">
            <!-- Content Header -->
            <div class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-6">
                            <h1 class="m-0">
                                <slot name="header" />
                            </h1>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Main content -->
            <div class="content">
                <div class="container-fluid">
                    <slot />
                </div>
            </div>
        </div>

        <!-- Footer -->
        <footer class="main-footer">
            <div class="float-right d-none d-sm-inline">
                Version 1.0
            </div>
            <strong>Copyright &copy; {{ new Date().getFullYear() }}</strong> All rights reserved.
        </footer>
    </div>
</template>

<style scoped>
.dropdown-menu.show {
    display: block;
}

.dropdown-item.text-danger {
    background: none;
    border: none;
    width: 100%;
    text-align: left;
    padding: 0.25rem 1rem;
    cursor: pointer;
}

.dropdown-item.text-danger:hover {
    background-color: #f8f9fa;
}
</style>
