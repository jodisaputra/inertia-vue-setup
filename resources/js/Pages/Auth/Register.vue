<script setup>
import { Head, Link, useForm } from '@inertiajs/vue3';

const form = useForm({
    name: '',
    email: '',
    password: '',
    password_confirmation: ''
});

const submit = () => {
    form.post(route('register'), {
        onFinish: () => form.reset('password', 'password_confirmation'),
    });
};
</script>

<template>

    <Head title="Register" />
    <div class="hold-transition register-page">
        <div class="register-box">
            <div class="register-logo">
                <a href="/"><b>Admin</b>LTE</a>
            </div>

            <div class="card">
                <div class="card-body register-card-body">
                    <p class="login-box-msg">Register a new membership</p>

                    <form @submit.prevent="submit">
                        <!-- Name Input -->
                        <div class="input-group mb-3">
                            <input type="text" class="form-control" placeholder="Full name" v-model="form.name"
                                autofocus :class="{ 'is-invalid': form.errors.name }">
                            <div class="input-group-append">
                                <div class="input-group-text">
                                    <span class="fas fa-user"></span>
                                </div>
                            </div>
                            <small v-if="form.errors.name" class="invalid-feedback">
                                {{ form.errors.name }}
                            </small>
                        </div>

                        <!-- Email Input -->
                        <div class="input-group mb-3">
                            <input type="email" class="form-control" placeholder="Email" v-model="form.email"
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

                        <!-- Password Confirmation Input -->
                        <div class="input-group mb-3">
                            <input type="password" class="form-control" placeholder="Retype password"
                                v-model="form.password_confirmation"
                                :class="{ 'is-invalid': form.errors.password_confirmation }">
                            <div class="input-group-append">
                                <div class="input-group-text">
                                    <span class="fas fa-lock"></span>
                                </div>
                            </div>
                            <small v-if="form.errors.password_confirmation" class="invalid-feedback">
                                {{ form.errors.password_confirmation }}
                            </small>
                        </div>

                        <div class="row">
                            <div class="col-12">
                                <button type="submit" class="btn btn-primary btn-block" :disabled="form.processing">
                                    <span v-if="form.processing">
                                        <i class="fas fa-spinner fa-spin"></i>
                                    </span>
                                    <span v-else>Register</span>
                                </button>
                            </div>
                        </div>
                    </form>

                    <Link :href="route('login')" class="text-center d-block mt-2">
                    I already have a membership
                    </Link>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.register-page {
    min-height: 100vh;
    background: #f4f6f9;
}

.register-box {
    width: 400px;
}

.invalid-feedback {
    display: block;
}

.input-group-append .input-group-text {
    border-left: 0;
}

.register-logo {
    margin-bottom: 1.5rem;
}

.register-logo a {
    color: #495057;
    text-decoration: none;
}

.login-box-msg {
    margin-bottom: 1rem;
}

.custom-control {
    position: relative;
    display: block;
    min-height: 1.5rem;
    padding-left: 1.5rem;
}

.custom-control input[type="checkbox"] {
    margin-right: 0.5rem;
}

/* Make links consistent */
.card-body a {
    color: #007bff;
    text-decoration: none;
}

.card-body a:hover {
    text-decoration: underline;
}

/* Loading spinner animation */
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

.social-auth-links p {
    margin: 10px 0;
}
</style>
