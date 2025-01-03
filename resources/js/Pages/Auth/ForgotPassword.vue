<script setup>
import { Head, useForm } from '@inertiajs/vue3';

defineProps({
    status: {
        type: String,
    },
});

const form = useForm({
    email: '',
});

const submit = () => {
    form.post(route('password.email'));
};
</script>

<template>

    <Head title="Forgot Password" />
    <div class="hold-transition login-page">
        <div class="login-box">
            <div class="login-logo">
                <a href="/"><b>Admin</b>LTE</a>
            </div>

            <div class="card">
                <div class="card-body login-card-body">
                    <p class="login-box-msg">You forgot your password? Here you can easily retrieve a new password.</p>

                    <div v-if="status" class="alert alert-success">
                        {{ status }}
                    </div>

                    <form @submit.prevent="submit">
                        <div class="input-group mb-3">
                            <input type="email" class="form-control" placeholder="Email" v-model="form.email"
                                autofocus :class="{ 'is-invalid': form.errors.email }">
                            <div class="input-group-append">
                                <div class="input-group-text">
                                    <span class="fas fa-envelope"></span>
                                </div>
                            </div>
                            <small v-if="form.errors.email" class="invalid-feedback">
                                {{ form.errors.email }}
                            </small>
                        </div>

                        <div class="row">
                            <div class="col-12">
                                <button type="submit" class="btn btn-primary btn-block" :disabled="form.processing">
                                    <span v-if="form.processing">
                                        <i class="fas fa-spinner fa-spin mr-2"></i>
                                        Processing...
                                    </span>
                                    <span v-else>
                                        Request new password
                                    </span>
                                </button>
                            </div>
                        </div>
                    </form>

                    <p class="mt-3 mb-1">
                        <a :href="route('login')" class="text-center">Login</a>
                    </p>
                    <p class="mb-0">
                        <a :href="route('register')" class="text-center">Register a new membership</a>
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

.login-box {
    width: 400px;
}

.login-logo {
    margin-bottom: 1.5rem;
}

.login-logo a {
    color: #495057;
    text-decoration: none;
}

.login-box-msg {
    margin-bottom: 1rem;
}

.alert {
    margin-bottom: 1rem;
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

/* Make links consistent */
.card-body a {
    color: #007bff;
    text-decoration: none;
}

.card-body a:hover {
    text-decoration: underline;
}

/* Ensure button stays full width */
.btn-block {
    width: 100%;
}

/* Add some spacing for the message */
.login-box-msg {
    padding-bottom: 1rem;
}
</style>
