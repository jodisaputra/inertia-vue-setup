<script setup>
import { useForm } from '@inertiajs/vue3';
import { nextTick, ref } from 'vue';

const confirmingUserDeletion = ref(false);
const passwordInput = ref(null);

const form = useForm({
    password: '',
});

const confirmUserDeletion = () => {
    confirmingUserDeletion.value = true;
};

const deleteUser = () => {
    form.delete(route('profile.destroy'), {
        preserveScroll: true,
        onSuccess: () => closeModal(),
        onError: () => passwordInput.value.focus(),
        onFinish: () => form.reset(),
    });
};

const closeModal = () => {
    confirmingUserDeletion.value = false;
    form.reset();
};
</script>

<template>
    <div>
        <!-- Warning Message -->
        <div class="callout callout-danger">
            <h5><i class="fas fa-exclamation-triangle"></i> Warning!</h5>
            <p>
                Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting
                your account, please download any data or information that you wish to retain.
            </p>
        </div>

        <!-- Delete Account Button -->
        <button @click="confirmUserDeletion" class="btn btn-danger">
            <i class="fas fa-user-times mr-2"></i>
            Delete Account
        </button>

        <!-- Delete Account Modal -->
        <div class="modal fade" :class="{ 'show': confirmingUserDeletion }" tabindex="-1" role="dialog"
            style="display: block;" v-if="confirmingUserDeletion">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <!-- Modal Header -->
                    <div class="modal-header bg-danger">
                        <h4 class="modal-title">
                            <i class="fas fa-exclamation-triangle mr-2"></i>
                            Confirm Account Deletion
                        </h4>
                        <button type="button" class="close" @click="closeModal">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>

                    <!-- Modal Body -->
                    <div class="modal-body">
                        <div class="alert alert-warning">
                            <i class="fas fa-exclamation-circle mr-2"></i>
                            Once your account is deleted, all of its resources and data will be permanently deleted.
                            Please enter your password to confirm you would like to permanently delete your account.
                        </div>

                        <div class="form-group">
                            <div class="input-group">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">
                                        <i class="fas fa-lock"></i>
                                    </span>
                                </div>
                                <input id="password" ref="passwordInput" v-model="form.password" type="password"
                                    class="form-control" :class="{ 'is-invalid': form.errors.password }"
                                    placeholder="Enter your password to confirm" @keyup.enter="deleteUser">
                                <div v-if="form.errors.password" class="invalid-feedback">
                                    {{ form.errors.password }}
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Modal Footer -->
                    <div class="modal-footer justify-content-between">
                        <button type="button" class="btn btn-default" @click="closeModal">
                            <i class="fas fa-times mr-2"></i>
                            Cancel
                        </button>
                        <button type="button" class="btn btn-danger" :disabled="form.processing" @click="deleteUser">
                            <i v-if="form.processing" class="fas fa-spinner fa-spin mr-2"></i>
                            <i v-else class="fas fa-trash mr-2"></i>
                            Delete Account
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Modal Backdrop -->
        <div class="modal-backdrop fade show" v-if="confirmingUserDeletion"></div>
    </div>
</template>

<style scoped>
.callout {
    margin-bottom: 1rem;
}

.modal-header .close {
    color: white;
    opacity: 0.8;
    margin: -1rem -1rem -1rem auto;
    padding: 1rem;
}

.modal-header .close:hover {
    opacity: 1;
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

.modal-header {
    color: white;
}

.modal.show {
    display: block;
    padding-right: 17px;
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

/* Add blur effect to background when modal is open */
.modal-backdrop {
    background-color: rgba(0, 0, 0, 0.5);
}

/* Ensure modal is on top */
.modal {
    z-index: 1050;
}

.modal-backdrop {
    z-index: 1040;
}
</style>
