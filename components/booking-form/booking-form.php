<form id="booking-form" class="booking-form">
    <div class="booking-form__invitations">
        <ul class="invitations__list">
            <template id="invitation-item-template">
                <li class="invitations__list-item">
                    <label class="invitations__label">
                        <input class="invitations__input" type="checkbox" name="recipients[]" value="">
                        <span class="invitations__text"></span>
                    </label>
                </li>
            </template>
        </ul>
    </div>
    <div class="booking-form__buttons">
        <input id="book-button" type="submit" value="Book selected times" class="booking-form__submit _book">
        <input id="cancel-bookings-button" type="submit" value="Cancel selected bookings" class="booking-form__submit _cancel _hidden">
    </div>
</form>
