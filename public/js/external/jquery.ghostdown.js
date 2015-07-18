(function ($, ShowDown, CodeMirror) {
    "use strict";
    var totalWords;
    var getHtmlCode = 'dsasas';

    $.widget( "b4m.ghostDown", {
        editor: null,
        markdown: null,
        html: null,
        converter: null,
        _create: function() {
            // object is passed using this.options
            // local vars
            var $original = $(this.options.original);
            var $markdown = $(this.options.markdown);
            var $preview = $(this.options.preview);
            var $originalHeader = $original.find('header');
            var $markdownHeader = $markdown.find('header');
            var $previewHeader = $preview.find('header');
            // copy original to editing column
            // $($original.find('textarea')).bind('input propertychange', function() {
            //     console.log('changeee');
            //     $('.CodeMirror-code pre').text($(this).val());
            // });
            // init app
            this.converter = new ShowDown.converter();
            this.editor = CodeMirror.fromTextArea($markdown.find('textarea')[0], {
                mode: 'markdown',
                tabMode: 'indent',
                lineWrapping: true
            });

            this.editor.on("change", $.proxy(function () {
                this._updatePreview();
            }, this));

            $($markdownHeader, $previewHeader, $originalHeader, this.element).click(function (e) {
                $($markdown, $preview, $originalHeader, this.element).removeClass('active');
                $(e.target, this.element).closest('section').addClass('active');
            });

            $('.CodeMirror-scroll', this.element).on('scroll', $.proxy(function (e) {
                this._syncScroll(e);
            }, this));

            // Shadow on Original if scrolled
            $($original.find('.content'), this.element).scroll(function(e) {
                if ($(e.target).scrollTop() > 10) {
                    $($markdown, this.element).addClass('scrolling');
                } else {
                    $($markdown, this.element).removeClass('scrolling');
                }
            });

            // Shadow on Markdown if scrolled
            $('.CodeMirror-scroll', this.element).scroll(function(e) {
                if ($(e.target).scrollTop() > 10) {
                    $($markdown, this.element).addClass('scrolling');
                } else {
                    $($markdown, this.element).removeClass('scrolling');
                }
            });
            // Shadow on Preview if scrolled
            $($preview.find('.content'), this.element).scroll(function(e) {
                if ($('.entry-preview-content', $(e.target).scrollTop()).scrollTop() > 10) {
                    $($preview, this.element).addClass('scrolling');
                } else {
                    $($preview, this.element).removeClass('scrolling');
                }
            });

            window.editor = this.editor;

            this._updatePreview();
        },
        _updatePreview: function() {
            var preview = this.element.find('.rendered-markdown');
            this.markdown = this.editor.getValue();
            this.html = this.converter.makeHtml(this.markdown);
            preview.html(this.html);
            this._updateWordCount();
            window.html = this.html;
        },
        getHtml: function () {
            return this.html;
        },
        getMarkdown: function () {
            return this.markdown;
        },
        _syncScroll: function (e) {
            // vars
            var $codeViewport = $(e.target),
                $previewViewport = $('.entry-preview-content'),
                $codeContent = $('.CodeMirror-sizer'),
                $previewContent = $('.rendered-markdown'),
                // calc position
                codeHeight = $codeContent.height() - $codeViewport.height(),
                previewHeight = $previewContent.height() - $previewViewport.height(),
                ratio = previewHeight / codeHeight,
                previewPostition = $codeViewport.scrollTop() * ratio;

            // apply new scroll
            $previewViewport.scrollTop(previewPostition);
        },
        _updateWordCount: function() {
            var wordCount = this.element.find('.entry-word-count'),
            editorValue = this.markdown;
            if (editorValue.length) {
                totalWords = editorValue.match(/\S+/g).length;
                wordCount.html(totalWords + ' words');
            }
        }
    });
}(jQuery, Showdown, CodeMirror));
