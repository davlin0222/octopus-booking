<form id="booking-form" class="booking-form">
    <div class="booking-form__invitations">
        <ul class="invitations__list">
            <li class="invitations__list-item">
                <label class="invitations__label">
                    <input class="invitations__input" type="checkbox" name="recipients[]" value="david@creatorise.com">
                    <span class="invitations__text">David</span>
                </label>
            </li>
            <li class="invitations__list-item">
                <label class="invitations__label">
                    <input class="invitations__input" type="checkbox" name="recipients[]" value="david@creatorise.com">
                    <span class="invitations__text">The boss</span>
                </label>
            </li>
        </ul>
    </div>
    <div class="booking-form__buttons">
        <input id="book-button" type="submit" value="Book selected times" class="booking-form__submit _book">
        <input id="cancel-bookings-button" type="submit" value="Cancel selected bookings" class="booking-form__submit _cancel _hidden">
    </div>
</form>
