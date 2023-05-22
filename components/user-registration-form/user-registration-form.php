<form class="user-registration-form">
    <div class="user-registration-form__field">
        <label class="user-registration-form__label" for="role">User role</label>
        <select class="user-registration-form__select" id="role" name="role" required>
            <option value="2">Employee</option>
            <option value="1">Admin</option>
        </select>
    </div>
    <div class="user-registration-form__field">
        <label class="user-registration-form__label" for="first_name">First name</label>
        <input class="user-registration-form__input" type="text" id="first_name" name="firstName" required>
    </div>
    <div class="user-registration-form__field">
        <label class="user-registration-form__label" for="last_name">Last name</label>
        <input class="user-registration-form__input" type="text" id="last_name" name="lastName" required>
    </div>
    <div class="user-registration-form__field">
        <label class="user-registration-form__label" for="email">Email</label>
        <input class="user-registration-form__input" type="email" id="email" name="email" required>
    </div>
    <div class="user-registration-form__field">
        <label class="user-registration-form__label" for="password">Password</label>
        <input class="user-registration-form__input" type="password" id="password" name="password" required>
    </div>
    <div class="user-registration-form__field">
        <input class="user-registration-form__submit" type="submit" value="Register user">
    </div>
</form>
