<script setup>
import AdminLayout from '@/Layouts/AdminLayout.vue';
</script>
<template>
    <AdminLayout>
        <template #header>
            Dashboard
        </template>

        <div class="row">
            <div class="col-lg-3 col-6">
                <div class="small-box bg-info">
                    <div class="inner">
                        <h3>150</h3>
                        <p>New Orders</p>
                    </div>
                    <div class="icon">
                        <i class="fas fa-shopping-cart"></i>
                    </div>
                    <a href="#" class="small-box-footer">More info <i class="fas fa-arrow-circle-right"></i></a>
                </div>
            </div>
            <!-- Add more dashboard widgets here -->
        </div>
    </AdminLayout>
</template>
