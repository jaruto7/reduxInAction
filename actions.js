import uuid from uuid;

const CREATE_COMMENT = 'CREATE_COMMENT';
const EDIT_COMMENT = 'EDIT_COMMENT';
const DELETE_COMMENT = 'DELETE COMMENT';
const SET_COMMENT_VOTES = 'SET_COMMENT_VOTES';

function createComment( text ) {
    return {
        type: CREATE_COMMENT,
        text,
        id: uuid.v4()
    }
}

function editComment( id ) {
    return {
        type: EDIT_COMMENT,
        text: 'Wyedytowany tekst komentarza',
        id
    }
}

function deleteComment( id ) {
    return {
        type: DELETE_COMMENT,
        id
    }
}

function thumbUpComment( votes, id ) {
    return {
        type: SET_COMMENT_VOTES,
        id,
        votes: votes=+1
    }
}

function thumbDownComment( votes, id ) {
    return {
        type: SET_COMMENT_VOTES,
        id,
        votes: votes=-1
    }
}