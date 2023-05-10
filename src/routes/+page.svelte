<script lang="ts">

    let content = "";
    let negate: string = "";

    function startsWithIgnoreCase(string: string, prefix: string): boolean {
        return string.toLowerCase().startsWith(prefix.toLowerCase());
    }

    /**
     * Flips positive sentences to negative. This only works on first person sentences, as it is not possible
     * to determine the subject of the sentence.
     * 
     * @param string the sentence to flip
     */
    function flip(string: string): string {
        if (string.length === 0) return "";
        let flipped = string;
        // If the string starts with 'no' remove it
        if (startsWithIgnoreCase(flipped, "no ")) {
            flipped = flipped.substring(3);
        } else {
            flipped = "No " + flipped;
        }
        return flipped;
    }
</script>

<svelte:head>
    <title>Page</title>
</svelte:head>

<style lang="scss">
    @import '../styles/variables.scss';
    // Removes all styles from input
    input {
        all: unset;
        border: none;
        // Only border a thin line of the same color at the bottom
        border-bottom: 1px solid $text_color;
        width: 100%;
    }
    // Container style
    .container {
        // Center the content
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;

        p {
            margin: 1rem;
            margin-left: 0;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        // Make the span the same height as if it were a 'p' element
        .filler {
            margin: 1rem;
            display: block;
            height: 1.2em;
        }
    }

    .container-wrapper {
        width: calc(100% * 2 / 3);
    }

    // Content style
    .content {
        // Makes child content have a blue background
        // background-color: blue;
        width: 100%;
    }

    .fade-in {
        opacity: 0;
        transform: translateY(20px);
        animation: fade-in 0.5s ease-out forwards;
    }

    @keyframes fade-in {
        from {
         opacity: 0;
         transform: translateY(20px);
        }
        to {
          opacity: 1;
         transform: translateY(0);
        }
    }
</style>

<div class="container">
    <div class="container-wrapper">
        <div class="content">
            <input type="text" spellcheck="false" bind:value={content} on:input={event => {
                let target = event.target;
                if (target instanceof HTMLInputElement) {
                    content = target.value;
                    negate = flip(content);

                    // Trigger the fade-in animation
                    let pElement = document.querySelector('.fade-in');
                    if (pElement instanceof HTMLElement) {
                        pElement.classList.remove('fade-in');
                        void pElement.offsetWidth;
                        pElement.classList.add('fade-in');
                    }
                }
            }} />
        </div>
        <div class="content">
            <!-- Check if negate -->
            {#if negate.length > 0}
                <p class="fade-in">{negate}</p>
            {:else}
                <div class="filler"></div>
            {/if}
        </div>
    </div>
</div>