<?php

namespace App\Services\Validator;

use App\Exception\InvalidCommentException;
use App\Model\ModelInterface;

class CommentValidator extends AbstractValidator
{
    public function validate(ModelInterface $model)
    {
        $this->throwError($model, InvalidCommentException::class);
    }
}