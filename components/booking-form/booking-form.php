<form id="booking-form" class="booking-form">

    <div class="booking-form__invitations">
        <h3 class="invitations__header">Invitations</h3>
        <?php include("invitations-list/invitations-list.php"); ?>
    </div>
    <div class="booking-form__buttons">
        <input id="book-button" type="submit" value="Confirm booking" class="booking-form__submit _book">
        <input id="cancel-bookings-button" type="submit" value="Cancel times" class="booking-form__submit _cancel _hidden">
    </div>
</form>
