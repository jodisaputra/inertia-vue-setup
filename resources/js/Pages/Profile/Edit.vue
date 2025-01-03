<script setup>
import AdminLayout from '@/Layouts/AdminLayout.vue';
import DeleteUserForm from './Partials/DeleteUserForm.vue';
import UpdatePasswordForm from './Partials/UpdatePasswordForm.vue';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm.vue';
import { Head } from '@inertiajs/vue3';

defineProps({
    mustVerifyEmail: {
        type: Boolean,
    },
    status: {
        type: String,
    },
});
</script>

<template>

    <Head title="Profile" />

    <AdminLayout>
        <template #header>
            Profile
        </template>

        <div class="row">
            <div class="col-12">
                <!-- Profile Information Card -->
                <div class="card card-primary card-outline">
                    <div class="card-header">
                        <h3 class="card-title">Profile Information</h3>
                    </div>
                    <div class="card-body">
                        <UpdateProfileInformationForm :must-verify-email="mustVerifyEmail" :status="status" />
                    </div>
                </div>

                <!-- Update Password Card -->
                <div class="card card-primary card-outline">
                    <div class="card-header">
                        <h3 class="card-title">Update Password</h3>
                    </div>
                    <div class="card-body">
                        <UpdatePasswordForm />
                    </div>
                </div>

                <!-- Delete Account Card -->
                <div class="card card-danger card-outline">
                    <div class="card-header">
                        <h3 class="card-title">Delete Account</h3>
                    </div>
                    <div class="card-body">
                        <DeleteUserForm />
                    </div>
                </div>
            </div>
        </div>
    </AdminLayout>
</template>

<style scoped>
.card {
    margin-bottom: 1rem;
}

.card-primary.card-outline {
    border-top: 3px solid #007bff;
}

.card-danger.card-outline {
    border-top: 3px solid #dc3545;
}

.card-header {
    background-color: transparent;
    padding: 1rem;
}

.card-title {
    margin: 0;
    font-size: 1.1rem;
    font-weight: 500;
}
</style>
