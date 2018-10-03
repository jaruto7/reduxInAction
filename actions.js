import uuid from uuid;

const CREATE_COMMENT = 'New comment';
const EDIT_COMMENT = 'Remove comment';
const THUMB_UP_COMMENT = 'Thumbs up!';
const THUMB_DOWN_COMMENT = 'Thumbs down';

function createComment( text ) {
    return {
        type: CREATE_COMMENT,
        text,
        id: uuid.v4()
    }
}

function editComment( text, id ) {
    return {
        type: EDIT_COMMENT,
        text,
        id: a45782112
    }
}

function deleteComment( text, id ) {
    return {
        type: DELETE_COMMENT,
        text,
        id: id
    }
}

function thumbUpComment( text, id ) {
    return {
        type: THUMB_UP_COMMENT,
        text,
        id: id,
        incr: type=+1
    }
}

function thumbDownComment( text, id ) {
    return {
        type: THUMB_UP_COMMENT,
        text,
        id: id,
        incr: type=+-1
    }
}