// For Move coding conventions, see
// https://docs.sui.io/concepts/sui-move-concepts/conventions

module contract::contract {
    use 0x1::string::String;
    use 0x1::vector;
    use 0x2::tx_context;
    use 0x2::tx_context::TxContext;
    use 0x2::object::{Self as object, UID};
    use 0x2::transfer;

    /// Persistent object recording a metadata submission.
    struct Metadata has key, store {
        id: UID,
        /// Wallet address of the submitter
        editor: address,
        /// Client-provided timestamp in milliseconds since epoch
        timestamp_ms: u64,
        /// Content or page title
        title: String,
        /// Content hash bytes (e.g., SHA-256 digest)
        content_hash: vector<u8>,
    }

    /// Submit content metadata as an owned object. Gas paid by the sender.
    /// The created object is transferred to the sender's address.
    public entry fun submit_metadata(title: String, content_hash: vector<u8>, timestamp_ms: u64, ctx: &mut TxContext) {
        let sender = tx_context::sender(ctx);
        let metadata = Metadata { id: object::new(ctx), editor: sender, timestamp_ms, title, content_hash };
        transfer::transfer(metadata, sender)
    }

    /// Backwards-compatible function kept for older clients; submits with an empty hash.
    public entry fun record_edit(title: String, timestamp_ms: u64, ctx: &mut TxContext) {
        let empty_hash = vector::empty<u8>();
        submit_metadata(title, empty_hash, timestamp_ms, ctx);
    }
}
