initSidebarItems({"constant":[["CHUNKS_PER_FAST_LOOP_BLOCK",""],["DECODED_BLOCK_LEN",""],["DECODED_CHUNK_LEN",""],["DECODED_CHUNK_SUFFIX",""],["INPUT_BLOCK_LEN",""],["INPUT_CHUNK_LEN",""]],"enum":[["DecodeError","Errors that can occur while decoding."]],"fn":[["decode","Decode from string reference as octets. Returns a Result containing a Vec. Convenience `decode_config(input, base64::STANDARD);`."],["decode_chunk","Decode 8 bytes of input into 6 bytes of output. 8 bytes of output will be written, but only the first 6 of those contain meaningful data."],["decode_chunk_precise","Decode an 8-byte chunk, but only write the 6 bytes actually decoded instead of including 2 trailing garbage bytes."],["decode_config","Decode from string reference as octets. Returns a Result containing a Vec."],["decode_config_buf","Decode from string reference as octets. Writes into the supplied buffer to avoid allocation. Returns a Result containing an empty tuple, aka ()."],["decode_config_slice","Decode the input into the provided output slice."],["decode_helper","Helper to avoid duplicating num_chunks calculation, which is costly on short inputs. Returns the number of bytes written, or an error."],["num_chunks","Return the number of input chunks (including a possibly partial final chunk) in the input"]]});