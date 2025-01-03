<script setup>
import { useForm } from '@inertiajs/vue3';
import { ref } from 'vue';

const passwordInput = ref(null);
const currentPasswordInput = ref(null);

const form = useForm({
    current_password: '',
    password: '',
    password_confirmation: '',
});

const updatePassword = () => {
    form.put(route('password.update'), {
        preserveScroll: true,
        onSuccess: () => {
            form.reset();
            showSuccessAlert.value = true;
            setTimeout(() => {
                showSuccessAlert.value = false;
            }, 2000);
        },
        onError: () => {
            if (form.errors.password) {
                form.reset('password', 'password_confirmation');
                passwordInput.value.focus();
            }
            if (form.errors.current_password) {
                form.reset('current_password');
                currentPasswordInput.value.focus();
            }
        },
    });
};

const showSuccessAlert = ref(false);
</script>

<template>
    <form @submit.prevent="updatePassword" class="form-horizontal">
        <!-- Success Message -->
        <div v-if="showSuccessAlert" class="alert alert-success alert-dismissible fade show">
            <h5><i class="icon fas fa-check"></i> Success!</h5>
            Password has been updated successfully.
        </div>

        <p class="text-muted">
            Ensure your account is using a long, random password to stay secure.
        </p>

        <!-- Current Password -->
        <div class="form-group row">
            <label for="current_password" class="col-sm-3 col-form-label">Current Password</label>
            <div class="col-sm-9">
                <div class="input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text">
                            <i class="fas fa-lock"></i>
                        </span>
                    </div>
                    <input id="current_password" ref="currentPasswordInput" v-model="form.current_password"
                        type="password" class="form-control" :class="{ 'is-invalid': form.errors.current_password }"
                        autocomplete="current-password" placeholder="Enter current password">
                    <div v-if="form.errors.current_password" class="invalid-feedback">
                        {{ form.errors.current_password }}
                    </div>
                </div>
            </div>
        </div>

        <!-- New Password -->
        <div class="form-group row">
            <label for="password" class="col-sm-3 col-form-label">New Password</label>
            <div class="col-sm-9">
                <div class="input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text">
                            <i class="fas fa-key"></i>
                        </span>
                    </div>
                    <input id="password" ref="passwordInput" v-model="form.password" type="password"
                        class="form-control" :class="{ 'is-invalid': form.errors.password }" autocomplete="new-password"
                        placeholder="Enter new password">
                    <div v-if="form.errors.password" class="invalid-feedback">
                        {{ form.errors.password }}
                    </div>
                </div>
            </div>
        </div>

        <!-- Confirm Password -->
        <div class="form-group row">
            <label for="password_confirmation" class="col-sm-3 col-form-label">Confirm Password</label>
            <div class="col-sm-9">
                <div class="input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text">
                            <i class="fas fa-key"></i>
                        </span>
                    </div>
                    <input id="password_confirmation" v-model="form.password_confirmation" type="password"
                        class="form-control" :class="{ 'is-invalid': form.errors.password_confirmation }"
                        autocomplete="new-password" placeholder="Confirm new password">
                    <div v-if="form.errors.password_confirmation" class="invalid-feedback">
                        {{ form.errors.password_confirmation }}
                    </div>
                </div>
            </div>
        </div>

        <!-- Submit Button -->
        <div class="form-group row">
            <div class="offset-sm-3 col-sm-9">
                <button type="submit" class="btn btn-primary" :disabled="form.processing">
                    <i v-if="form.processing" class="fas fa-spinner fa-spin mr-2"></i>
                    <i v-else class="fas fa-save mr-2"></i>
                    Update Password
                </button>
            </div>
        </div>
    </form>
</template>

<style scoped>
.form-group {
    margin-bottom: 1rem;
}

.invalid-feedback {
    display: block;
}

.input-group-text {
    border-right: none;
}

.form-control {
    border-left: none;
}

.input-group .form-control.is-invalid {
    border-left: none;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

.fa-spinner {
    animation: spin 1s linear infinite;
}

.alert {
    margin-bottom: 1rem;
}

.text-muted {
    margin-bottom: 1rem;
}
</style>
