<template>
  <div class="flex items-center justify-center">
    <div class="w-full max-w-md">
      <form class="bg-white shadow-lg rounded px-12 pt-8 pb-8 mb-4">
        <!-- @csrf -->
        <div
          class="text-gray-800 text-2xl flex justify-center border-b-2 py-2 mb-4"
        >
          Profilga kirish
        </div>
        <div class="mb-4">
          <label
            class="block text-gray-700 text-sm font-normal mb-2"
            for="username"
          >
            Email
          </label>
          <input
            v-model="form.email"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="email"
            type="email"
            required
            autofocus
            placeholder="Email"
          >
        </div>
        <div class="mb-6">
          <label
            class="block text-gray-700 text-sm font-normal mb-2"
            for="password"
          >
            Parol
          </label>
          <input
            v-model="form.password"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            placeholder="Password"
            name="password"
            required
            autocomplete="current-password"
          >
        </div>
        <div class="flex items-center justify-between">
          <button class="px-4 py-2 min-w-full rounded text-white inline-block shadow-lg bg-blue-500 hover:bg-blue-600 focus:bg-blue-700" type="submit">Kirish</button>
          <!-- <a
                class="inline-block align-baseline font-normal text-sm text-blue-500 hover:text-blue-800"
                href="#"
              >
                Parolni unuttingizmi?
              </a> -->
        </div>
        <div class="flex items-center justify-center">
          <p>
            Akkauntingiz yo'qmi?
            <a
              class="inline-block align-baseline font-normal text-sm text-blue-500 hover:text-blue-800"
              href="#"
            >
              <router-link :to="{ name: 'Register' }">
                Ro'yhatdan o'tish
              </router-link>
            </a>
          </p>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  }
}
</script>

<style>
</style>
