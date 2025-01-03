<script setup>
import { useForm, Head } from '@inertiajs/vue3';

const form = useForm({
    email: '',
    password: '',
    remember: false,
});

const submit = () => {
    form.post(route('login'));
};
</script>

<template>

    <Head title="Login" />
    <div class="hold-transition login-page">
        <div class="login-box">
            <div class="card card-outline card-primary">
                <div class="card-header text-center">
                    <a href="/" class="h1">Admin<b>LTE</b></a>
                </div>
                <div class="card-body">
                    <p class="login-box-msg">Sign in to start your session</p>

                    <form @submit.prevent="submit">
                        <!-- Email Input -->
                        <div class="input-group mb-3">
                            <input type="email" class="form-control" placeholder="Email" v-model="form.email" autofocus
                                :class="{ 'is-invalid': form.errors.email }">
                            <div class="input-group-append">
                                <div class="input-group-text">
                                    <span class="fas fa-envelope"></span>
                                </div>
                            </div>
                            <small v-if="form.errors.email" class="invalid-feedback">
                                {{ form.errors.email }}
                            </small>
                        </div>

                        <!-- Password Input -->
                        <div class="input-group mb-3">
                            <input type="password" class="form-control" placeholder="Password" v-model="form.password"
                                :class="{ 'is-invalid': form.errors.password }">
                            <div class="input-group-append">
                                <div class="input-group-text">
                                    <span class="fas fa-lock"></span>
                                </div>
                            </div>
                            <small v-if="form.errors.password" class="invalid-feedback">
                                {{ form.errors.password }}
                            </small>
                        </div>

                        <!-- Remember Me & Submit -->
                        <div class="row">
                            <div class="col-8">
                                <div class="remember-me-wrapper">
                                    <input type="checkbox" id="remember" v-model="form.remember">
                                    <label for="remember" class="remember-me-label">
                                        Remember Me
                                    </label>
                                </div>
                            </div>
                            <div class="col-4">
                                <button type="submit" class="btn btn-primary btn-block" :disabled="form.processing">
                                    <span v-if="form.processing">
                                        <i class="fas fa-spinner fa-spin"></i>
                                    </span>
                                    <span v-else>Sign In</span>
                                </button>
                            </div>
                        </div>
                    </form>

                    <!-- Links -->
                    <p class="mb-1">
                        <a :href="route('password.request')" class="text-primary">I forgot my password</a>
                    </p>
                    <p class="mb-0">
                        <a :href="route('register')" class="text-primary">Register a new membership</a>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.login-page {
    min-height: 100vh;
    background: #f4f6f9;
}

.invalid-feedback {
    display: block;
}

.input-group-append .input-group-text {
    border-left: 0;
}

.remember-me-wrapper {
    display: flex;
    align-items: center;
    gap: 5px;
}

.remember-me-label {
    margin-bottom: 0;
    font-weight: normal;
    cursor: pointer;
}

input[type="checkbox"] {
    cursor: pointer;
    margin: 0;
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

.card-outline.card-primary {
    border-top: 3px solid #007bff;
}

.login-box-msg {
    margin-bottom: 1rem;
}

.text-primary {
    color: #007bff !important;
    text-decoration: none;
}

.text-primary:hover {
    text-decoration: underline;
}
</style>
